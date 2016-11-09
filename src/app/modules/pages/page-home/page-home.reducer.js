import { FETCH_RESTAURANTS } from './page-home.action-types';

const initialState = {
    restaurants: []
};

export default function restaurants(state = initialState, action) {
    console.log('Action received', action);
    switch (action.type) {
        case FETCH_RESTAURANTS:
            var arr = [];
            for (var i in action.payload) {
                if (action.payload.hasOwnProperty(i)) {
                    arr.push(action.payload[i]);
                }
            }
            return {
                ...state,
                restaurants: arr
            };
        default:
            return state;
    }
};
