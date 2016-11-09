import { FETCH_RESTAURANTS } from './page-home.action-types';
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

export function fetchRestaurants() {
    return function(dispatch) {
        const ref = Firebase.database().ref('restaurants');
        ref.on('value', (snapshot) => {
          console.log(snapshot.val());
          dispatch({
            type: FETCH_RESTAURANTS,
            payload: snapshot.val()
          })
        });
    }
}
