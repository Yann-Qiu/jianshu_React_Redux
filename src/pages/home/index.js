import React, { PureComponent } from 'react';
import { HomeWrapper,HomeLeft,HomeRight,HeadImg,BackToTop } from './style.js';
import List from './components/List.js';
import Recommande from './components/Recommande.js';
import Writer from './components/Writer.js';
import Topic from './components/Topic.js';
import { connect } from 'react-redux';
import { actionCreator } from './store';

class Home extends PureComponent{
	render(){
		return (
			<HomeWrapper>
				<HomeLeft>
					
					<Topic />
					<List />
				</HomeLeft>
				<HomeRight>
					<Recommande />
					<Writer />
				</HomeRight>
				{this.props.showScroll ? <BackToTop onClick={this.backToTop.bind(this)}>Top</BackToTop> : null}
			</HomeWrapper>
		)
	}

	backToTop(){
		window.scrollTo(0,0);
	}

	bindEvents(){
		window.addEventListener("scroll", this.props.changeShowScroll);
	}

	componentWillUnmount(){
		window.removeEventListener("scroll", this.props.changeShowScroll);
	}

	componentDidMount(){
		this.props.getData();
		this.bindEvents();
	}
}

const mapStateToProps = (state)=>{
	return {
		showScroll: state.getIn(["home","showScroll"]),
	}
}

const mapDispatchToProps = (dispatch)=>{
	return {
		getData(){
			dispatch(actionCreator.getData())
		},
		changeShowScroll(){
			if(document.documentElement.scrollTop > 50)
				dispatch(actionCreator.changeShowScrollTrue())
			else
				dispatch(actionCreator.changeShowScrollFalse())
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);