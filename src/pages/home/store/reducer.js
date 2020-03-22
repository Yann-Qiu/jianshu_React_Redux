import { fromJS } from 'immutable';
import * as actionType from './actionType.js';

const defaultState = fromJS({
	topicList: [],
	articleList: [],
	writerList: []
});

export default (prevState = defaultState,action)=>{
	switch (action.type) {
		case actionType.CHANGE_CONTENT:
			return 	prevState.merge({
				topicList:fromJS(action.topicList),
				articleList:fromJS(action.articleList),
				writerList:fromJS(action.writerList)
			})
		default:
			return prevState;
	}
}