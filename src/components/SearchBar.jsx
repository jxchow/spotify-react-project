import React from 'react';
import '../styles/SearchBar.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

import Spotify from "spotify-web-api-js";

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          songName: '', // initialize to empty string
          open: false,
          songs: this.props.searchSongs,
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const songName = e.target.value;
        this.setState({ songName });
    }

    async handleToggle() {
        const { songName } = this.state
        const { onSearch } = this.props;
        this.setState(state => ({ open: !state.open }));
        let songs = await onSearch(songName);
        this.setState({ songs: songs });
    }

    handleClick(e,song) {
        const { addToQueue } = this.props;
        addToQueue(song);
        this.setState({ songName: "", open: false, songs: [] });
    }

    handleClose = event => {
        if (this.anchorEl.contains(event.target)) {
          return;
        }
        console.log(event.target.value);
        this.setState({ open: false });
    };

    renderSongs() {
        const { songs } = this.state;
        if (songs) {
            console.log(songs);
            return songs.map(song => <MenuItem key={song.id} onClick={e => this.handleClick(e, JSON.stringify(song))}>{song.artists.map(artist => artist.name).join(", ")} - {song.name}</MenuItem>);
        } else {
            return <MenuItem onClick={this.handleClose}>No results :(</MenuItem>
        }
    }

    
    render() {
        const { open } = this.state;
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
                    <Button
                        buttonRef={node => {
                        this.anchorEl = node;
                        }}
                        aria-owns={open ? 'menu-list-grow' : undefined}
                        aria-haspopup="true"
                        onClick={this.handleToggle}
                        style={{marginTop: 12, marginLeft: 12}}
                        color="primary"
                        variant="contained"
                    >
                        Search
                    </Button>
                    <div className="dropdown">
                    <Popper open={open} anchorEl={this.anchorEl} transition disablePortal >
                        {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            id="menu-list-grow"
                            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                        >
                            <Paper>
                            <ClickAwayListener onClickAway={this.handleClose}>
                                <MenuList style={{maxHeight: 500, width: 500, zIndex: 1, overflowY: "scroll"}}>
                                {this.renderSongs()}
                                </MenuList>
                            </ClickAwayListener>
                            </Paper>
                        </Grow>
                        )}
                    </Popper>
                    </div>
                </form>
            </div>
        );
        
    };
}