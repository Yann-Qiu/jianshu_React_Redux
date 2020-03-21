import * as actionTypes from './actionType.js';
import { fromJS } from 'immutable';

const defaultState = fromJS({
	focused: false,
	mouseIn: false,
	list : [],
	page : 1,
	totalPage : 1,
	refresh: false
});

export default (prevState = defaultState,action)=>{
	switch (action.type) {
		case actionTypes.HANLE_INPUT_FOCUS:
			return prevState.set('focused',true);
		case actionTypes.HANLE_INPUT_BLUR:
			return prevState.set('focused',false);
		case actionTypes.GET_LIST:
			return prevState.merge({
				list:action.data,
				totalPage:action.totalPage
			})
		case actionTypes.MOUSE_ENTER:
			return prevState.set('mouseIn',true);
		case actionTypes.MOUSE_OVER:
			return prevState.set('mouseIn',false);
		case actionTypes.CHANGE_PAGE:
			return prevState.set('page',action.page).set('refresh',true);
		case actionTypes.UPDATE_REFRESH:
			return prevState.set('refresh',false);
		default:
			return prevState;
	}
}