import { combineReducers } from 'redux-immutable';
import { headReducer } from '../common/header/store';
import { homeReducer } from '../pages/home/store';

const reducer = combineReducers({
	header: headReducer,
	home: homeReducer
});

export default reducer;


