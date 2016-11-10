import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as Actions from '../page-home/page-home.actions';
import NavBar from '../../common/navbar/navbar';
import RestaurantList from '../page-home/restaurant-list/restaurant-list';
import logo from '../../../../assets/img/shared/logo.svg';


class PageRestaurants extends Component {
    componentWillMount() {
        this.props.actions.fetchRestaurants();
    }

    render() {
        return(
            <div>
                <div className="App-header">
                    <h5 className="App-header__site-name"><img src={logo} className="App-header__logo" alt="Tyler's Tidbits" /></h5>
                </div>
                <NavBar />
                <RestaurantList restaurants={this.props.restaurants} />
            </div>
        );
    }
}

function mapStateToProps(state) {
  return {
    restaurants: state.restaurants
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PageRestaurants);


