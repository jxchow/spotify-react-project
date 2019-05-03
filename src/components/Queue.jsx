import React from 'react';
import '../styles/Queue.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export default class Queue extends React.Component {
    renderSongs() {
        const { songList } = this.props;
        console.log(songList);
        if (songList.length === 0) {
            return (
                <ListItem className="queue-item">
                    <ListItemText primary="Queue is empty" secondary="Search for songs to add!"/>
                </ListItem>
            );
        } else {
            return (songList.map(track => (
                <ListItem className="queue-item">
                    <ListItemText primary={track.name} secondary={track.artists.map(artist => artist.name).join(", ")} />
                </ListItem>
            )));
        }
        
    }

    render () {
        return (
            <div className="queue-list-container">
                <List className="queue-list">
                    {this.renderSongs()}
                </List>
            </div>
        );
    };
    // render () {
    //     return (
    //         <div className="queue-list-container">
    //             <List className="queue-list">
    //             <ListItem className="queue-item">
    //                 <ListItemText primary="Song Title" secondary="Artist" />
    //             </ListItem>
    //             <ListItem>
    //                 <ListItemText primary="Song Title" secondary="Artist" />
    //             </ListItem>
    //             <ListItem>
    //                 <ListItemText primary="Song Title" secondary="Artist" />
    //             </ListItem>
    //             <ListItem>
    //                 <ListItemText primary="Song Title" secondary="Artist" />
    //             </ListItem>
    //             <ListItem>
    //                 <ListItemText primary="Song Title" secondary="Artist" />
    //             </ListItem>
    //             <ListItem>
    //                 <ListItemText primary="Song Title" secondary="Artist" />
    //             </ListItem>
    //             <ListItem>
    //                 <ListItemText primary="Song Title" secondary="Artist" />
    //             </ListItem>
    //             <ListItem>
    //                 <ListItemText primary="Song Title" secondary="Artist" />
    //             </ListItem>
    //             <ListItem>
    //                 <ListItemText primary="Song Title" secondary="Artist" />
    //             </ListItem>
    //             <ListItem>
    //                 <ListItemText primary="Song Title" secondary="Artist" />
    //             </ListItem>
    //             <ListItem>
    //                 <ListItemText primary="Song Title" secondary="Artist" />
    //             </ListItem>
    //             <ListItem>
    //                 <ListItemText primary="Song Title" secondary="Artist" />
    //             </ListItem>
    //             <ListItem>
    //                 <ListItemText primary="Song Title" secondary="Artist" />
    //             </ListItem>
    //             </List>
    //         </div>
    //     );
    // };
}