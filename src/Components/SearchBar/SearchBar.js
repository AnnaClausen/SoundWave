import React from 'react';
import './SearchBar.css';


class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        }

        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
    }

    search() {
        this.props.onSearch(this.state.term);
    }

    handleTermChange(event) {
        this.setState({term: event.target.value});
    }

    render() {
        return (
            <div className="SearchBar">
            <img className='Logo' src='../SoundWave_Logo.svg' alt="Logo" />
            <input onChange={this.handleTermChange} placeholder="Enter A Song, Album, or Artist..." />
            <button className="SearchButton" onClick={this.search}>SEARCH</button>
          </div> 
        )
    }

}

export default SearchBar;
