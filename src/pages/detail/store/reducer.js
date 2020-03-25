import { fromJS } from 'immutable';
import * as actionType from './actionType.js';

const defaultState = fromJS({
	detailList: [],
	isDetailPage: false,
	changeHeader: false
})

export default (prevState = defaultState,action)=>{
	switch (action.type) {
		case actionType.SET_DETAIL:
			return prevState.set("detailList",action.detailList);
		case actionType.IS_PAGE_DETAIL:
			return prevState.set("isDetailPage",action.status);
		case actionType.CHANGE_HEADER:
			return prevState.set("changeHeader",action.status);
		default:
			return prevState;
	}
}