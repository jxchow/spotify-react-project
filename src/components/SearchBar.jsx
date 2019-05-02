import React from 'react';
import '../styles/SearchBar.css';
import TextField from '@material-ui/core/TextField';

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          songName: '', // initialize to empty string
        };
    
        this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const songName = e.target.value;
        this.setState({ songName });
    }
    
    render() {

        return (
            <div className="search-container">
                <form>
                    <TextField
                        className="search-bar"
                        id="song-name"
                        label="Song Name"
                        value={this.state.songName}
                        onChange={this.handleChange}
                    />
                </form>
            </div>
        );
        
    };
}