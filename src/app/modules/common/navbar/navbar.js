import React, { Component } from 'react';
import { Link } from 'react-router';

import logoHome from '../../../../assets/img/shared/home.svg';
import logoRestaurants from '../../../../assets/img/shared/restaurants.svg';
import logoSearch from '../../../../assets/img/shared/search.svg';
import logoAdd from '../../../../assets/img/shared/add.svg';

class NavBar extends Component {
    onInputChange(term) {
        this.setState({term});
        this.props.onTermChange(term);
    }

    render() {
        return(
            <nav className="nav-bar">
                <ul>
                    <li><Link to="/" title="Home"><img src={logoHome} className="nav-bar__nav-icon" alt="Home" />Home</Link></li>
                    <li><Link to="/restaurants" title="Restaurants"><img src={logoRestaurants} className="nav-bar__nav-icon" alt="Restaurants" />Restaurants</Link></li>
                    <li><Link to="/" title="Search"><img src={logoSearch} className="nav-bar__nav-icon" alt="Search" />Search</Link></li>
                    <li><Link to="/" title="Add"><img src={logoAdd} className="nav-bar__nav-icon" alt="Add" />Add</Link></li>
                </ul>
            </nav>
        );
    }
}

export default NavBar;