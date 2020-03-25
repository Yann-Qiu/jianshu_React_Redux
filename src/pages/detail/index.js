import React, { PureComponent } from 'react';
import { Page,Button,DetailWrapper,DetailTitle,DetailText,DetailWriter,DetailSide } from './style.js';
import { connect } from 'react-redux';
import { actionCreator } from "./store";

class Detail extends PureComponent{
	
	render(){
		//console.log(this.props.match.params.id);
		const { detailList } = this.props;
		return (
			<Page>
				<Button>
					<div className="like">
						<span className="iconfont">&#xe61c;</span>	
					</div>
					<div className="word">747赞</div>
					<div className="prime">
						<span className="iconfont">&#xe8a3;</span>
					</div>
					<div className="word">赞赏</div>
				</Button>
				{detailList.map((item,index)=>{
					return (
							<DetailWrapper key={index}>
								<DetailTitle>
									{item.get("title")} 
								</DetailTitle>
								<DetailWriter>
									<img 
										className="pic" 
										src={item.getIn(["writer","imgUrl"])} 
										alt="img"
									/>
									<div className="detailInfo">
										<div className="name">{item.getIn(["writer","name"])} </div>
										<div className="desc">
											<span className="descItem diamond">
												<span className="iconfont">&#xe625;</span>
												{item.getIn(["writer","diamond"])} 
											</span>
											<span className="descItem">
												{item.getIn(["writer","time"])} 
											</span>
											<span className="descItem">
												字数 {item.getIn(["writer","word"])} 
											</span>
											<span className="descItem">
												阅读 {item.getIn(["writer","read"])} 
											</span>
										</div>
									</div>
								</DetailWriter>
								<DetailText>
									{item.get("content")} 
								</DetailText>
							</DetailWrapper>
						)
				})}
				<DetailSide>
					DetailSide
				</DetailSide>
			</Page>
		)
	}

	componentDidMount(){
		this.props.getDetail(this.props.match.params.id);
		this.props.isPageDetail(true);
	}

	componentWillUnmount(){
		this.props.isPageDetail(false);
	}
}

const mapStateToProps = (state)=>{
	return{
		detailList: state.getIn(["detail","detailList"])
	}
}
	
const mapDispatchToProps = (dispatch)=>{
	return{
		getDetail(id){
			dispatch(actionCreator.getDetail(id));
		},
		isPageDetail(status){
			dispatch(actionCreator.isPageDetail(status));
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Detail);