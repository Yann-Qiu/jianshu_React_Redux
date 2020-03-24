import * as actionType from './actionType.js';
import axios from 'axios';
import { fromJS } from 'immutable';

const loginAction = (data) =>{
	return {
		type: actionType.LOGIN_ACTION,
		login :data
	}
}

export const changeLogin = (username,password)=>{
	return ((dispatch)=>{
		axios.get('api/login.json?username='+username+"&password="+password)
		.then((res)=>{
			const data = res.data;
			if(data.success){
				dispatch(loginAction(data.login));
			}
			else{
				
			}
		})
	})
}

export const logout = ()=>{
	return {
		type: actionType.LOGOUT
	}
}