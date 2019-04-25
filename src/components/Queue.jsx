import React from 'react';
import '../styles/Queue.css';
//takes in an array of objects with name, artist, and image art and render music track components and then maps it to dispa
export default class Queue extends React.Component {
	renderSongs(s) {
    return (
    	   <div className="queue-song" key={s.song}>
    	   		<img src={s.pic}></img> 
    	   		<h1 className="song-text">{s.song}</h1>
    	   		<h3 className="artist-text">{s.artist}</h3>
    	   </div>
    	);
    }

    render () {
    	const songs = this.props.songslist;
        return (
        	<div className="queue">
        		<h2 className="queue-text">Current Queue</h2>
        		{songs.map(this.renderSongs)}
        	</div>
        );
    }
}