import React from 'react';
import '../styles/MusicPlayer.css';
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';

export default class MusicPlayer extends React.Component {
    render () {
        return (
            <div className="music-player-container">
                <Card className="music-player-card">
                    <div className="controls">
                        <IconButton aria-label="Previous">
                            <SkipPreviousIcon />
                        </IconButton>
                        <IconButton aria-label="Play/pause">
                            <PlayArrowIcon className="play-icon" />
                        </IconButton>
                        <IconButton aria-label="Next">
                            <SkipNextIcon />
                        </IconButton>
                    </div>
                </Card>
            </div>
        );
    };
}