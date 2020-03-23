import React, { PureComponent } from 'react';
import { ListItem,ListInfo,ListDesc,LoadMore } from '../style.js';
import { connect } from 'react-redux';
import { actionCreator } from '../store';
import { Link } from 'react-router-dom';

class List extends PureComponent{
	
	render(){
		const { articleList,getMoreList,page } = this.props;
		return (
			<div>
				{
					articleList.map((item)=>{
						return (
							<Link key={item.get("id")} to='/detail' >
								<ListItem>
									<img 
										className="pic"
										src={item.get("imgUrl")}
										alt="img" 
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
							</Link>
						)
					})
				}
				<LoadMore onClick={()=>{getMoreList(page)}}>加载更多</LoadMore>
			</div>
		)
	}
	
}

const mapStateToProps = (state)=>{
	return {
		articleList : state.getIn(['home','articleList']),	
		page : state.getIn(['home','articlePage'])
	}
}

const mapDispatchToProps = (dispatch)=>{
	return {
		getMoreList(page){
			dispatch(actionCreator.getMoreList(page))
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(List);