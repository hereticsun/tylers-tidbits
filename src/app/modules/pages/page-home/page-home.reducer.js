import { CLEAR_RESTAURANTS, FETCH_RESTAURANTS, SEARCH_RESTAURANTS, FETCH_BY_CATEGORY } from './page-home.action-types';

const initialState = {
    restaurants: []
};

export default function restaurants(state = initialState, action) {
    let arr = []

    switch (action.type) {
        case CLEAR_RESTAURANTS:
            return {
                ...state,
                restaurants: ''
            };
        case FETCH_RESTAURANTS:
            arr = [];
            for (let i in action.payload) {
                if (action.payload.hasOwnProperty(i)) {
                    arr.push(action.payload[i]);
                }
            }
            return {
                ...state,
                restaurants: arr
            };
        case SEARCH_RESTAURANTS:
            arr = [];
            for (let i in action.payload) {
                if (action.payload.hasOwnProperty(i)) {
                    arr.push(action.payload[i]);
                }
            }
            return {
                ...state,
                restaurants: arr
            };
        case FETCH_BY_CATEGORY:
            arr = [];
            for (let i in action.payload) {
                if (action.payload.hasOwnProperty(i)) {
                    arr.push(action.payload[i]);
                }
            }
            return{
                ...state,
                restaurants: arr
            };
        default:
            return state;
    }
};

