import { combineReducers } from 'redux-immutable';
import { headReducer } from '../common/header/store';
import { homeReducer } from '../pages/home/store';
import { detailReducer } from '../pages/detail/store';

const reducer = combineReducers({
	header: headReducer,
	home: homeReducer,
	detail : detailReducer
});

export default reducer;


