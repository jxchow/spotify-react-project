import React from 'react';
import logo from './logo.svg';
import './styles/App.css';
import Login from './components/Login.jsx';
import SearchBar from './components/SearchBar.jsx';
import CurrentlyPlaying from './components/CurrentlyPlaying.jsx';
import MusicPlayer from './components/MusicPlayer.jsx';
import Queue from './components/Queue.jsx';
import MusicTrack from './components/MusicTrack.jsx';
import UserProfile from './components/UserProfile.jsx';

import Spotify from "spotify-web-api-js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      devices: [],
      currentDevice: ""
    };
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
        currentDevice: devices[0].id
      });
    }
  }

  render() {
    const { authenticated } = this.state;
    return (
      <div className="App">
        {authenticated ? (
          <div>
            <SearchBar />
            <CurrentlyPlaying />
            <MusicPlayer />
            <Queue />
            <MusicTrack />
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
