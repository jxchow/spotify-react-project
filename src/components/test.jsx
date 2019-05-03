import React from 'react';
import Select from 'react-select';
import AsyncSelect from 'react-select/lib/Async';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

export default class Test extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          songName: '', // initialize to empty string
          inputValue: '',
          songs: [],
        };
    
        // this.handleChange = this.handleChange.bind(this);
    }

    handleInputChange = (newValue) => {
        const inputValue = newValue.replace(/\W/g, '');
        this.setState({ inputValue });
        return inputValue;
    };

    async onSubmit(ev) {

        ev.preventDefault();
        try {
            const { spotifyClient } = this.props;
            const { tracks: { items: songs }} = await spotifyClient.searchTracks(this.state.inputValue, {market: "us"});
            this.setState({ songs });
        } catch {
            alert("something went wrong");
        }
        
    }


    render() {
        const { songName } = this.state;

        return (
            <form onSubmit={this.onSubmit}>
                <div style={{width: 300}}>
                    <AsyncSelect
                        isSearchable={true}
                        isClearable={true}
                        onInputChange={this.handleInputChange}
                        cacheOptions
                        loadOptions={this.search}
                    />
                </div>
            </form>
        );
    }
}