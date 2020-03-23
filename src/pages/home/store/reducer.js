import { fromJS } from 'immutable';
import * as actionType from './actionType.js';

const defaultState = fromJS({
	topicList: [],
	articleList: [],
	writerList: [],
	articlePage: 1,
	showScroll: false
});

const changeContent = (prevState,action)=>{
	return 	prevState.merge({
		topicList:fromJS(action.topicList),
		articleList:fromJS(action.articleList),
		writerList:fromJS(action.writerList)
	})
};

const updateList = (prevState,action)=>{
	const newList = prevState.get('articleList').concat(action.articleList);
	return 	prevState.set('articleList',newList).set("articlePage",action.nextPage);
}

export default (prevState = defaultState,action)=>{
	switch (action.type) {
		case actionType.CHANGE_CONTENT:
			return changeContent(prevState,action);
		case actionType.UPDATE_LIST:
			return updateList(prevState,action);
		case actionType.CHANGE_SHOW_SCROLL_TRUE:
			return 	prevState.set('showScroll',true);
		case actionType.CHANGE_SHOW_SCROLL_FALSE:
			return 	prevState.set('showScroll',false);
		default:
			return prevState;
	}
}