import React, { Component,Fragment } from 'react';
import { CSSTransition } from 'react-transition-group';
import { 
	HeaderWrapper,
	Logo,Nav,NavItem,
	NavSearch,Addition,
	Btn,SearchWrapper,
	SearchInfo,
	SearchInfoTitle,
	SearchInfoSwitch,
	SearchInfoItem
} from './style.js';
import { connect } from 'react-redux';
import  { actionCreators } from './store';

class Header extends Component{
	constructor(props){
		super(props);
		this.getSearchInfo = this.getSearchInfo.bind(this);
	}

	render(){
		const { focused,handlerInputFocus,handlerInputBlur,mouseIn,list } = this.props;
		return (
			<Fragment>
				<HeaderWrapper>
					<Logo />
					<Nav>
						<NavItem className="left active"><span className="iconfont">&#xe62f;</span> 首页</NavItem>
						<NavItem className="left"><span className="iconfont">&#xe600;</span> 下载APP</NavItem>
						<NavItem className="right">登录</NavItem>
						<NavItem className="right"><span className="iconfont">&#xe655;</span></NavItem>
						<SearchWrapper>
							<CSSTransition 
								timeout={200} 
								in={focused} 
								classNames="slide"
							>
								<NavSearch 
									className={ (focused||mouseIn) ? 'focused' : ''} 
									onFocus={()=>{handlerInputFocus(list)}}
									onBlur={handlerInputBlur}
								>
								</NavSearch>
							</CSSTransition>
							<span className={(focused||mouseIn) ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe601;</span>
							{this.getSearchInfo()}
						</SearchWrapper>
					</Nav>
					<Addition>
						<Btn className="write"><span className="iconfont">&#xe602;</span> 写文章</Btn>
						<Btn>注册</Btn>
					</Addition>
				</HeaderWrapper>
			</Fragment>
		)
	}

	getSearchInfo(){
		const { focused,list,page,handlerEnter,mouseIn,handleOver,changPage,totalPage,refresh } = this.props;
		const newList = list.toJS();
		const pageList = [];
		if(newList.length){
			for(let i = (page-1) * 10; i < page * 10; i++){
				if(newList[i])
					pageList.push(newList[i]);
			}
		}
		if(focused || mouseIn){
			return (
				<SearchInfo onMouseEnter={handlerEnter} onMouseLeave={handleOver}>
					<SearchInfoTitle>
						热门搜索
						<SearchInfoSwitch onClick={()=>{changPage(page,totalPage)}}>
							<CSSTransition 
								timeout={500} 
								in={refresh}
								classNames="rotate"
							>
								<span className="iconfont spin">&#xe631;</span>
							</CSSTransition>
							换一批
						</SearchInfoSwitch>
					</SearchInfoTitle>
					<div>
						{
							pageList.map((item,index)=>{
								return <SearchInfoItem key= {index}>{item}</SearchInfoItem>
							})
						}
					</div>
				</SearchInfo>
			)
		}
		else{
			return null;
		}
	}

}

const mapStateToProps = (state)=>{
	return {
		focused : state.getIn(['header','focused']), //state.get("header").get('focused')
		list : state.getIn(['header','list']),
		page: state.getIn(['header','page']),
		mouseIn: state.getIn(['header','mouseIn']),
		totalPage: state.getIn(['header','totalPage']),
		refresh: state.getIn(['header','refresh'])
	}
}

const mapDispatchToProps = (dispatch)=>{
	return {
		handlerInputFocus(list){
			if(list.size === 0)
				dispatch(actionCreators.getList());
			dispatch(actionCreators.handlerInputFocus());
		},
		handlerInputBlur(){
			dispatch(actionCreators.handlerInputBlur());
		},
		handlerEnter(){
			dispatch(actionCreators.mouserEnter());
		},
		handleOver(){
			dispatch(actionCreators.mouserOver());
		},
		changPage(page,totalPage){
			if(page < totalPage){
				dispatch(actionCreators.changPage(page + 1));
			}else{
				dispatch(actionCreators.changPage(1));
			}
			setTimeout(()=>{dispatch(actionCreators.updateRefresh())},500);
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);