import { fromJS } from 'immutable';
import * as actionType from './actionType.js';

const defaultState = fromJS({
	login: false,
	tryLogin: false
})

export default (prevState = defaultState,action)=>{
	switch (action.type) {
		case actionType.LOGIN_ACTION:
			return prevState.set("login",action.login).set("tryLogin",true);
		case actionType.LOGOUT:
			return prevState.set("login",false).set("tryLogin",false);
		case "resetTry":
			return prevState.set("tryLogin",false);
		default:
			return prevState;
	}
}