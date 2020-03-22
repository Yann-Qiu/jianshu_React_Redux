import React, { Component,Fragment } from 'react';
import { ListItem,ListInfo,ListDesc } from '../style.js';
import { connect } from 'react-redux';

class List extends Component{
	
	render(){
		const { articleList } = this.props;
		return (
			<div>
				{
					articleList.map((item)=>{
						return (
							<ListItem key={item.get("id")}>
								<img 
									className="pic"
									src={item.get("imgUrl")} 
								/>
								<ListInfo>
									<h3 className="title">{item.get("title")} </h3>
									<p className="desc">
										{item.get("desc")} 
									</p>
								</ListInfo>
								<ListDesc>
									<p className="descItem diamond">
										<span className="iconfont">&#xe625;</span>
										{item.get("diamond")}
									</p>
									<p className="descItem">
										{item.get("writer")}
										
									</p>
									<p className="descItem">
										<span className="iconfont">&#xe603;</span>
										{item.get("comment")}
									</p>
									<p className="descItem">
										<span className="iconfont">&#xe61c;</span>
										{item.get("like")}
									</p>
								</ListDesc>
							</ListItem>
						)
					})
				}
			</div>
		)
	}
	
}

const mapStateToProps = (state)=>{
	return {
		articleList : state.getIn(['home','articleList']),	
	}
}

const mapDispatchToProps = (dispatch)=>{
	return {

	}
}

export default connect(mapStateToProps,mapDispatchToProps)(List);