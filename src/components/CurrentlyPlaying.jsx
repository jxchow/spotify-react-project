import React from 'react';
import '../styles/CurrentlyPlaying.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export default class CurrentlyPlaying extends React.Component {
    render () {
        return (
            <div className="song-container">
                <Card className="song-card">
                    <img
                        className="album-image"
                        src="http://placekitten.com/400/400"
                        alt="text"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Song Name
                    </Typography>
                    <Typography component="p">
                        Artist Name
                    </Typography>
                    </CardContent>
                </Card>
            </div>
        );
    };
}