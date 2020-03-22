import * as actionType from './actionType.js';
import axios from 'axios';
import { fromJS } from 'immutable';

const changeContent = (data)=>{
	console.log(data);
	return{
		type:actionType.CHANGE_CONTENT,
		topicList: fromJS(data.topicList),
		articleList: fromJS(data.articleList),
		writerList: fromJS(data.writerList)
	}
}


export const getData = () =>{
	return ( (dispatch)=>{
			axios.get('/api/home.json')
			.then((res)=>{
				const data = res.data;
				console.log(data);
				if(data.success){
					dispatch(changeContent(data.data));
				}
			})
		}

	)
}