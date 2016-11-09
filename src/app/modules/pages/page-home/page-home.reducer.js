import { FETCH_RESTAURANTS, SEARCH_RESTAURANTS } from './page-home.action-types';

const initialState = {
    restaurants: []
};

export default function restaurants(state = initialState, action) {
    console.log('Action received', action);
    switch (action.type) {
        case FETCH_RESTAURANTS:
            let arr = [];
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
            let res = [];
            for (let i in action.payload) {
                if (action.payload.hasOwnProperty(i)) {
                    res.push(action.payload[i]);
                }
            }
            return {
                ...state,
                restaurants: res
            };
        default:
            return state;
    }
};
