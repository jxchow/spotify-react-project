import React from 'react';
import '../styles/Login.css';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default class Login extends React.Component {
    render () {
        return (
            <div className="login-container">
                <Card className="card">
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            Login with Spotify
                        </Typography>
                    </CardContent>
                    <CardActions className="card-buttons">
                    <a className="link" href={`https://accounts.spotify.com/authorize/?client_id=5fe31cc270944cdbab821bf242291a3e&response_type=token&redirect_uri=${window.location.origin+window.location.pathname}&scope=user-read-playback-state user-modify-playback-state user-top-read user-read-private`}>
                        <Button variant="contained" color="primary">Sign In</Button>
                    </a>
                    </CardActions>
                </Card>
            </div>
            
        );
    };
}