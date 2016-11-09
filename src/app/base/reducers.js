import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';

import PageHome from '../modules/pages/page-home/page-home.reducer';

const rootReducer = combineReducers({
	form: FormReducer,
	restaurants: PageHome,
});

export default rootReducer;
