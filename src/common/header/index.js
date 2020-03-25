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
import { Redirect } from 'react-router-dom';
import  { actionCreators } from './store';
import  { actionCreator as loginActionCreator } from '../../pages/login/store';
import  { actionCreator as detailActionCreator } from '../../pages/detail/store';
import { Link } from 'react-router-dom';

class Header extends Component{
	constructor(props){
		super(props);
		this.getSearchInfo = this.getSearchInfo.bind(this);
		this.checkStatus = this.checkStatus.bind(this);
	}

	render(){
		return this.checkStatus();
	}
	
	bindEvents(){
		window.addEventListener("scroll", this.props.changeShowScroll);
	}

	componentWillUnmount(){
		window.removeEventListener("scroll", this.props.changeShowScroll);
	}

	componentDidMount(){
		this.bindEvents();
	}

	checkStatus(){
		const { 
			focused,
			handlerInputFocus,
			handlerInputBlur,
			mouseIn,
			list,
			login,
			logout,
			isDetailPage,
			detailList,
			changeHeader
		} = this.props;
		if(isDetailPage && changeHeader)
		{
			return (
				<Fragment>
					<HeaderWrapper>
					{
						detailList.map((item)=>{
							return (
								<Nav>
									<NavItem className="left">{item.get("title")}</NavItem>
									<NavItem className="left">{item.getIn(["writer","name"])}</NavItem>
								</Nav>
							)
						})
					}
					</HeaderWrapper>
				</Fragment>
			)
		}
		else{
			return(
				<Fragment>
					<HeaderWrapper>
						<Link to='/'>
							<Logo />
						</Link>
						<Nav>
							<Link to='/'>
								<NavItem className="left active"><span className="iconfont">&#xe62f;</span> 首页</NavItem>
							</Link>
							<NavItem className="left"><span className="iconfont">&#xe600;</span> 下载APP</NavItem>
							{
								login ? 
								<NavItem className="right" onClick={logout}>退出</NavItem> : 
								<Link to='/login'><NavItem className="right">登录</NavItem></Link>
							}
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
							<Link to="/write">
								<Btn className="write"><span className="iconfont">&#xe602;</span> 写文章</Btn>
							</Link>
							<Btn>注册</Btn>
						</Addition>
					</HeaderWrapper>
				</Fragment>
			)
		}
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
		refresh: state.getIn(['header','refresh']),
		login: state.getIn(['login','login']),
		isDetailPage: state.getIn(['detail','isDetailPage']),
		detailList: state.getIn(['detail','detailList']),
		changeHeader:state.getIn(['detail','changeHeader'])
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
		},
		logout(){
			dispatch(loginActionCreator.logout());
		},
		checkStatus(login){
			if(!login){
				return <Redirect to="/login" />
			}
			else{
				console.log("ok");
			}
		},
		changeShowScroll(){
			if(document.documentElement.scrollTop > 70)
				dispatch(detailActionCreator.changeHeader(true))
			else{
				dispatch(detailActionCreator.changeHeader(false))
			}
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);