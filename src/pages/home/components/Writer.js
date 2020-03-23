import React, { PureComponent } from 'react';
import { WriterWrapper,WriterItem } from '../style.js';
import { connect } from 'react-redux';

class Writer extends PureComponent{
	
	render(){
		const { writerList } = this.props;
		return (
			<WriterWrapper>
				<p className="recommandeWriter">
					推荐作者
				</p>
				<p className="spin">
					<span className="iconfont">&#xe631;</span>
					换一批
				</p>
				{
					writerList.map((item)=>{
						return(
							<WriterItem key={item.get("id")}>
								<img className="pic" src={item.get("imgUrl")} alt="img"/>
								<div className="name">{item.get("name")}</div>
								<div className="desc">写了{item.get("word")}字 · {item.get("like")}喜欢</div>
							</WriterItem>
						)
					})
				}
			</WriterWrapper>
		)
	}
	
}

const mapStateToProps = (state)=>{
	return {
		writerList : state.getIn(['home','writerList']),	
	}
}

const mapDispatchToProps = (dispatch)=>{
	return {

	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Writer);