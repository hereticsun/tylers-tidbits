import { CLEAR_RESTAURANTS, FETCH_RESTAURANTS, SEARCH_RESTAURANTS, FETCH_BY_CATEGORY } from './page-home.action-types';
import Firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyD-3fytNEkUFupGn0j8R8F8yIunSt8tROU",
    authDomain: "tylers-tidbits.firebaseapp.com",
    databaseURL: "https://tylers-tidbits.firebaseio.com",
    storageBucket: "",
    messagingSenderId: "359930459149"
};

Firebase.initializeApp(config);

export function clearRestaurants() {
    return function(dispatch) {
        dispatch({
            type: CLEAR_RESTAURANTS
        });
    }
}

export function fetchRestaurants() {
    return function(dispatch) {
        const ref = Firebase.database().ref('restaurants');
        ref.on('value', (snapshot) => {
            dispatch({
                type: FETCH_RESTAURANTS,
                payload: snapshot.val()
            })
        });
    }
}

export function searchRestaurants(term) {
    return function(dispatch) {
        const ref = Firebase.database().ref('restaurants').orderByChild('name').equalTo(term);
        ref.on("value", (snapshot) => {
            dispatch({
                type: SEARCH_RESTAURANTS,
                payload: snapshot.val()
            })
        });
    }
}

export function fetchByCategory(term) {
    return function(dispatch) {
        const ref = Firebase.database().ref('restaurants').orderByChild('category').equalTo(term);
        ref.on('value', (snapshot) => {
            console.log('By Category', snapshot.val());
             dispatch({
                type: FETCH_BY_CATEGORY,
                payload: snapshot.val()
            })
        });
    }
}
