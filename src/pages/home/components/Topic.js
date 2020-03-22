import React, { Component } from 'react';
import { TopicWrapper,TopicItem } from '../style.js';
import { connect } from 'react-redux';

class Topic extends Component{
	
	render(){
		const { topicList } = this.props;
		return (
			<TopicWrapper>
				{
					topicList.map((item)=>{
						return (
							<TopicItem key={item.get("id")}>
								<img 
									className="img" 
									src={item.get("imgUrl")}
								/>
								{item.get("title")}
							</TopicItem>
						)
					})
				}
			</TopicWrapper>
		)
	}
	
}

const mapStateToProps = (state)=>{
	return {
		topicList : state.getIn(['home','topicList']),	
	}
}

const mapDispatchToProps = (dispatch)=>{
	return {

	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Topic);