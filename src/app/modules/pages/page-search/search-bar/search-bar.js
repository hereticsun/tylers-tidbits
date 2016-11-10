import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { term: this.props.term }
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onTermChange(term);
    }

    render() {
        return(
            <div className="search-bar">
                <label >Search for a lunch venue</label>
                <input id="search" className="search-bar__input" name="search" defaultValue={this.state.term} onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }
}

export default SearchBar;