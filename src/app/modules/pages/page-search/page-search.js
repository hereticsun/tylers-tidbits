import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as Actions from '../page-home/page-home.actions';
import NavBar from '../../common/navbar/navbar';
import SearchBar from './search-bar/search-bar';
import RestaurantList from '../../common/restaurant-list/restaurant-list';
import logo from '../../../../assets/img/shared/logo.svg';


class PageSearch extends Component {
    componentWillMount() {
        this.props.actions.clearRestaurants();

        if(this.props.routeParams.term) {
            this.props.actions.searchRestaurants(this.props.routeParams.term);
        }
    }

    handleTermChange(term) {
/*
        const ref = Firebase.database().ref('restaurants').orderByChild('name').equalTo(term);
        ref.on("value", (snapshot) => {
            let d = snapshot.val();
            console.log('Firebase Snapshot', d);
            this.setState({restaurants: d});
        }, (error) => {
            console.log("Error: " +error.code);
        });
 */
        this.props.actions.searchRestaurants(term);
   }

    render() {
        return(
            <div>
                <div className="App-header">
                    <h5 className="App-header__site-name"><img src={logo} className="App-header__logo" alt="Tyler's Tidbits" /></h5>
                </div>
                <NavBar />
                <SearchBar onTermChange={term => this.handleTermChange(term)} term={this.props.routeParams.term} />
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

export default connect(mapStateToProps, mapDispatchToProps)(PageSearch);


