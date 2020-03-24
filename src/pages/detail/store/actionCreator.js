import * as actionType from './actionType.js';
import axios from 'axios';
import { fromJS } from 'immutable';

const setDetail=(data)=>{
	return {
		type: actionType.SET_DETAIL,
		detailList: fromJS(data)
	}
}

export const getDetail = () =>{
	return ((dispatch)=>{
		axios.get('/api/detail.json')
		.then((res)=>{
			const data = res.data;
			if(data.success){
				dispatch(setDetail(data.data));
			}
		})
	})
}