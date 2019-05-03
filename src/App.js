import React from 'react';
import './styles/App.css';
import Login from './components/Login.jsx';
import SearchBar from './components/SearchBar.jsx';
import CurrentlyPlaying from './components/CurrentlyPlaying.jsx';
import MusicPlayer from './components/MusicPlayer.jsx';
import Queue from './components/Queue.jsx';
import UserProfile from './components/UserProfile.jsx';

import Spotify from "spotify-web-api-js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      devices: [],
      currentDevice: "",
      queue: [],
      currentlyPlaying: null,
      isPlaying: false,
      searchSongs: [],
      position: 0,
    };

    this.togglePlayPause = this.togglePlayPause.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handleAddSong = this.handleAddSong.bind(this);
    this.addToQueue = this.addToQueue.bind(this);
    this.search = this.search.bind(this);
  }

  async componentDidMount() {
    if (window.location.hash) {
      // Remove the "#"
      const queryString = window.location.hash.substring(1);
      // Parse the access_token out
      const accessToken = new URLSearchParams(queryString).get("access_token");
      this.spotifyClient = new Spotify();
      this.spotifyClient.setAccessToken(accessToken);

      const { devices } = await this.spotifyClient.getMyDevices();
      // const devices = Object.keys(devicesResp).map(key => devicesResp[key]);
      this.setState({
        authenticated: true,
        devices,
        currentDevice: devices[2].id
      });
    }
  }

  async startPlayback(song, queue, position) {
    let uris = queue.map(track => track.uri);
    await this.spotifyClient.play({
      device_id: this.state.currentDevice,
      uris: [song.uri].concat(uris),
      position_ms: position,
    });
  }

  async pausePlayback() {
    await this.spotifyClient.pause({
      device_id: this.state.currentDevice
    });
  }

  async setTrackPosition() {
    let track = await this.spotifyClient.getMyCurrentPlayingTrack();
    console.log(track);
    this.setState({ position: track.progress_ms });
  }

  async search(song) {
    const {tracks: { items: songs }} = await this.spotifyClient.searchTracks(song, {market: "us"});
    this.setState({ searchSongs: songs });
    return songs;
  }

  addToQueue(songJson) {
    let song = JSON.parse(songJson);
    this.setState(state => ({ queue: state.queue.concat(song), searchSongs: [] }));
    console.log("song has been added");
  }

  togglePlayPause() {
    const { isPlaying, currentlyPlaying, queue, position } = this.state;
    if (isPlaying) {
      this.setTrackPosition();
      this.pausePlayback();
      this.setState({ isPlaying: false });
    } else {
      if (currentlyPlaying != null) {
        this.startPlayback(currentlyPlaying, queue, position);
      } else {
        this.handleNext();
      }
      this.setState({ isPlaying: true });
    }
    console.log("play/pause");
  }

  handleNext() {
    const { queue } = this.state;
    if (queue.length > 0) {
      let next = queue[0];
      let newQueue = queue.slice(1);
      this.setState({queue: newQueue, currentlyPlaying: next, position: 0, isPlaying: true});
      this.startPlayback(next, newQueue, 0);
      console.log("next");
    }
  }

  handleAddSong(imageUrl, song, artist) {
    let track = {song: song, artist: artist, imageUrl: imageUrl};
    console.log("song has been added");
  }

  renderCurrentlyPlaying(currentSong) {
    return (
      <CurrentlyPlaying imageUrl={currentSong.album.images[0].url} song={currentSong.name} artist={currentSong.artists.map(artist => artist.name).join(", ")} />
    );
  }

  render() {
    const { authenticated, isPlaying, queue, searchSongs, currentlyPlaying } = this.state;
    console.log(this.spotifyClient);
    return (
      <div className="App">
        {authenticated ? (
          <div>
            <SearchBar onSearch={this.search} addToQueue={this.addToQueue} songs={searchSongs}/>
            {currentlyPlaying ? this.renderCurrentlyPlaying(currentlyPlaying) : <CurrentlyPlaying imageUrl="http://placekitten.com/400/400" song="Song Title" artist="Artist Name" />}
            <MusicPlayer hasNext={queue.length > 0} isPlaying={isPlaying} onPlay={() => this.togglePlayPause()} onNext={() => this.handleNext()} />
            <Queue songList={queue} />
            <UserProfile />
          </div>
        ) : (
          <Login />
        )}
      </div>
    );
  }
}

export default App;
