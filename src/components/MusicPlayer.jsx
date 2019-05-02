import React from 'react';
import PausePlayButton from './PausePlayButton';
import NextButton from './NextButton';
import '../styles/MusicPlayer.css';

const TIME_STEP = 1000;

class MusicPlayer extends React.Component {
	constructor(props) {
		super(props);
		this.setTimer = this.setTimer.bind(this);
    	this.stop = this.stop.bind(this);
    	this.toggleIsPlaying = this.toggleIsPlaying.bind(this);
    	this.tick = this.tick.bind(this);

		this.state = {
			isPlaying: false,
			time: 0,
		}
	}

	componentDidMount() {
    	this.setTimer();
  	}

  	setTimer() {
    	this.timerID = setInterval(this.tick, TIME_STEP);
  	}

	stop() {
    	this.setState({ isPlaying: false });
  	}

  	toggleIsPlaying() {
    	this.setState(prevState => ({ isPlaying: !prevState.isPlaying }));
  	}

  	tick() {
    	const { isPlaying, time } = this.state;

	    if (isPlaying) {
	      this.setState(prevState => ({
	        time: prevState.time + 1,
	      }),
	      () => {
	        if (time === this.props.length * 1000) {
	          this.props.func();
	        }
	      });
	    }
  	}

  	componentWillUnmount() {
    	this.stop();
  	}

    render () {
    	const { isPlaying } = this.state;
        return (
        	<div className="music-player">
	        	<div>
	          		<PausePlayButton isPlaying={isPlaying} onClick={this.toggleIsPlaying} />
	        	</div>
	        	<div>
	          		<NextButton onClick={this.props.skip} />
	        	</div>
      		</div>
        );
    };
}

export default MusicPlayer;