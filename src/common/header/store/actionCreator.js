import * as actionTypes from './actionType.js';
import axios from 'axios';
import { fromJS } from 'immutable';

const changeList = (data) =>{
	return ({
		type : actionTypes.GET_LIST,
		data : fromJS(data),
		totalPage: Math.ceil(data.length / 10)
	})
}

export const handlerInputFocus = () =>{
	return ({
		type: actionTypes.HANLE_INPUT_FOCUS
	})
}

export const handlerInputBlur = () =>{
	return ({
		type: actionTypes.HANLE_INPUT_BLUR
	})
}

export const getList = () =>{
	return (dispatch)=>{
		axios.get('/api/headerList.json')
		.then((res)=>{
			const data = res.data;
			if(data.success){
				dispatch(changeList(data.data))
			}
		})
		.catch((err)=>{

		})
	}
}

export const mouserEnter = () => {
	return {
		type: actionTypes.MOUSE_ENTER
	}
}

export const mouserOver = () => {
	return {
		type: actionTypes.MOUSE_OVER
	}
}

export const changPage = (page) => {
	return {
		type: actionTypes.CHANGE_PAGE,
		page:page
	}
}

export const updateRefresh = ()=>{
	return {
		type: actionTypes.UPDATE_REFRESH
	}
}