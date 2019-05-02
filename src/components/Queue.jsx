import React from 'react';
import '../styles/Queue.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export default class Queue extends React.Component {
    render () {
        return (
            <div className="queue-list-container">
                <List className="queue-list">
                <ListItem className="queue-item">
                    <ListItemText primary="Song Title" secondary="Artist" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Song Title" secondary="Artist" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Song Title" secondary="Artist" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Song Title" secondary="Artist" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Song Title" secondary="Artist" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Song Title" secondary="Artist" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Song Title" secondary="Artist" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Song Title" secondary="Artist" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Song Title" secondary="Artist" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Song Title" secondary="Artist" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Song Title" secondary="Artist" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Song Title" secondary="Artist" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Song Title" secondary="Artist" />
                </ListItem>
                </List>
            </div>
        );
    };
}