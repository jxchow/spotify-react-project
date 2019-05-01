import React from 'react';
import '../styles/CurrentlyPlaying.css';

export default class CurrentlyPlaying extends React.Component {
    render () {
        return (
        	<div className="currently-playing-container">
        		<img src="http://placekitten.com/400/300"></img>
      			<div className="currently-playing-title">
      				<h1>Song Title</h1>
      			</div>
      			<div className="currently-playing-artist">
      				Song Artist
      			</div>
    		</div>
        );
    };
}