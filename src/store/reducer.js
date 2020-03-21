import { combineReducers } from 'redux-immutable';
import { headReducer } from '../common/header/store';

const reducer = combineReducers({
	header: headReducer
});

export default reducer;


