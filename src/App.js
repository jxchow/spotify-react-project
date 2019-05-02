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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleNext = this.handleNext.bind(this);

    this.state = {
      queue: [],
      currentlyPlaying: ""
    }
  }

  handleNext() {
    this.setState({
      currentlyPlaying: this.state.queue[0],
    });
    let copy = [...this.state.queue];
    copy.shift();
    this.setState({
      queue: copy,
    });
  }

  addToQueue(url, song, artist) {
    let newSong = {
      imageURL: url,
      song: song, 
      artist: artist
    }
    this.setState({
      queue: [...this.state.queue, newSong],
    });
  }

  render() {
    return (
      <div className="App">
        <Login />
        <SearchBar />
        <CurrentlyPlaying />
        <MusicPlayer />
        <Queue />
        <MusicTrack />
        <UserProfile />
      </div>
    );
  }; 
}

export default App;
