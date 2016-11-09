import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as Actions from './page-home.actions';
import SearchBar from './search-bar/search-bar';
import RestaurantList from './restaurant-list/restaurant-list';

class PageHome extends Component {
    componentWillMount() {
/*
        const ref = Firebase.database().ref('restaurants');

        ref.push({
            name: 'The Woolpack',
            cuisine: 'gastro pub',
            walking: '1',
            postcode: 'SE1 3UB',
            stars: '3.9',
            directions: 'https://www.google.co.uk/maps/dir/75+Bermondsey+St,+London+SE1+3XF,+UK/The+Woolpack,+98+Bermondsey+St+SE1+3UB,+United+Kingdom/@51.501062,-0.0841533,17z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x48760344d31c8f1f:0x476a8c113efb076d!2m2!1d-0.0820124!2d51.501364!1m5!1m1!1s0x48760344cba00789:0x29367bd891ffa943!2m2!1d-0.082037!2d51.50076?hl=en',
            url: 'http://www.woolpackbar.com/'
        });

        ref.push({
            name: 'Wrap it up',
            cuisine: 'wraps',
            walking: '12',
            postcode: 'SE1 3UB',
            stars: '4',
            directions: 'https://www.google.co.uk/maps/dir/75+Bermondsey+St,+London+SE1+3XF,+UK/Wrap+It+Up!,+85-87+Borough+High+St,+London+SE1+1NH,+United+Kingdom/@51.502336,-0.0840229,15z/data=!4m14!4m13!1m5!1m1!1s0x48760344d31c8f1f:0x476a8c113efb076d!2m2!1d-0.0820124!2d51.501364!1m5!1m1!1s0x48760359d69ad27f:0xe53fd3a5276f496e!2m2!1d-0.090319!2d51.504255!3e2?hl=en',
            url: 'http://www.wrapitup.co.uk/about-us/locations/'
        });
*/
        this.props.actions.fetchRestaurants();
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

        console.log('Search term: ', term);
   }

    render() {
        return(
            <div>
                <div className="App-header">
                    <header>
                        <h1>Tyler&apos;s<br />Tidbits</h1>
                    </header>
                </div>
                <SearchBar onTermChange={term => this.handleTermChange(term)} />
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

export default connect(mapStateToProps, mapDispatchToProps)(PageHome);


