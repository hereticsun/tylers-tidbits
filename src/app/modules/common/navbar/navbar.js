import React, { Component } from 'react';

class NavBar extends Component {
    onInputChange(term) {
        this.setState({term});
        this.props.onTermChange(term);
    }

    render() {
        return(
            <nav className="nav-bar">
                <ul>
                    <li><a href="" title="Home">Home</a></li>
                    <li><a href="" title="Search">Search</a></li>
                    <li><a href="" title="Add">Add</a></li>
                </ul>
            </nav>
        );
    }
}

export default NavBar;