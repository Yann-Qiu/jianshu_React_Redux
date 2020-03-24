import { fromJS } from 'immutable';
import * as actionType from './actionType.js';

const defaultState = fromJS({
	detailList: []
})

export default (prevState = defaultState,action)=>{
	switch (action.type) {
		case actionType.SET_DETAIL:
			return prevState.set("detailList",action.detailList);
		default:
			return prevState;
	}
}