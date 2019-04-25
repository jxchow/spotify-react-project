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

function App() {
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
}

export default App;
