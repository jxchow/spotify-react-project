import React from 'react';
import '../styles/CurrentlyPlaying.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export default class CurrentlyPlaying extends React.Component {
    render () {
        const { imageUrl, song, artist } = this.props;
        return (
            <div className="song-container">
                <Card className="song-card">
                    <img
                        className="album-image"
                        src={imageUrl}
                        alt="text"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {song}
                    </Typography>
                    <Typography component="p">
                        {artist}
                    </Typography>
                    </CardContent>
                </Card>
            </div>
        );
    };
}