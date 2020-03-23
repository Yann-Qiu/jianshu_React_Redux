import * as actionType from './actionType.js';
import axios from 'axios';
import { fromJS } from 'immutable';

const changeContent = (data)=>{
	return{
		type:actionType.CHANGE_CONTENT,
		topicList: fromJS(data.topicList),
		articleList: fromJS(data.articleList),
		writerList: fromJS(data.writerList)
	}
}

const updateList = (data,nextPage)=>{
	return{
		type:actionType.UPDATE_LIST,
		articleList: fromJS(data),
		nextPage: fromJS(nextPage)
	}
}

export const changeShowScrollTrue=()=>{
	return {
		type:actionType.CHANGE_SHOW_SCROLL_TRUE
	}
}

export const changeShowScrollFalse=()=>{
	return {
		type:actionType.CHANGE_SHOW_SCROLL_FALSE
	}
}


export const getData = () =>{
	return ( (dispatch)=>{
			axios.get('/api/home.json')
			.then((res)=>{
				const data = res.data;
				if(data.success){
					dispatch(changeContent(data.data));
				}
			})
		}
	)
}

export const getMoreList = (page)=>{
	return ((dispatch)=>{
			axios.get('/api/moreList.json?page='+ page)
			.then((res)=>{
				const data = res.data;
				if(data.success){
					dispatch(updateList(data.data, page+1 ));
				}
			})
		}
	)
}