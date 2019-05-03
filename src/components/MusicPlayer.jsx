import React from 'react';
import '../styles/MusicPlayer.css';
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import SkipNextIcon from '@material-ui/icons/SkipNext';

export default class MusicPlayer extends React.Component {
    render () {
        const { isPlaying, onPlay, onNext, hasNext } = this.props;
        return (
            <div className="music-player-container">
                <Card className="music-player-card">
                    <div className="controls">
                        <IconButton aria-label="Previous" disabled={true}>
                            <SkipPreviousIcon />
                        </IconButton>
                        <IconButton aria-label="Play/pause" onClick={onPlay}>
                            {isPlaying ? <PauseIcon className="icon" /> : <PlayArrowIcon className="icon" />}
                        </IconButton>
                        <IconButton aria-label="Next" disabled={!hasNext} onClick={onNext}>
                            <SkipNextIcon />
                        </IconButton>
                    </div>
                </Card>
            </div>
        );
    };
}