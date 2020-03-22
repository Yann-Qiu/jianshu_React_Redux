import styled  from 'styled-components';
import logoPic from './../../img/logo.png';

export const HeaderWrapper = styled.div`
	position: relative; 
	height : 56px;
	border-bottom : 1px solid #f0f0f0;
	width: 100%;
	box-sizing: border-box;
`;

export const Logo = styled.a.attrs({href:'/'})`
	position: absolute;
	top : 0;
	left : 30px;
	display: block;
	width: 15%;
	height : 56px;
	background : url(${logoPic}) no-repeat;
	background-size : contain;
`;


export const Nav = styled.div`
	box-sizing: border-box;
	width : 65%;
	box-sizing : border-box;
	padding-right: 70px;
	margin : 0 auto;
	height : 100%; 
`;

export const NavItem = styled.div`

	line-height : 56px;
	font-size : 17px;
	padding : 0 15px;
	color : #333;
	cursor: pointer;	
	&.left{
		float :left;
		.iconfont{
			line-height : 56px;
			font-size: 20px;
			font-weight:bolder;
		}
	}
	&.right{
		float :right;
		color : #969696;
		.iconfont{
			line-height : 56px;
			font-size: 25px;
		}
	}
	&.active{
		color : #ea6f5a;
	}
`;

export const SearchWrapper= styled.div`
	position: relative;
	float :left;
	.zoom{
		cursor: pointer;
		position: absolute;
		right 5px;
		bottom: 3px;
		border-radius: 30px;
		width:30px;
		height:30px;
		line-height : 30px;
		text-align : center;
		font-size: 20px;
		&.focused{
			background : grey;
			color : #fff;
		}
	}
`;

export const NavSearch = styled.input.attrs({placeholder:'搜索'})`
	width: 160px;
	height: 38px;
	margin-top : 9px;
	margin-left: 20px;
	border : none;
	outline: none;
	background : #eee;
	border-radius: 19px;
	padding: 0 35px 0 20px;
	float: left; 
	font-size: 15px;
	color : #666;
	&.focused{
		width : 210px;
	}
	&::placeholder{
		color: #999;
	}
	&.slide-enter{
		transition: all .2s ;
	}
	&.slide-exit{
		transition: all .2s ;
	}
`;

export const SearchInfo = styled.div`
	position: absolute;
	left:20px;
	top:56px;
	width: 240px;
	padding : 0 20px;
	box-shadow: 0 0 8px rgba(0,0,0,.2);
`

export const SearchInfoTitle = styled.div`
	margin-top: 15px;
	margin-bottom : 15px;
	line-height: 20px;
	font-size : 14px;
	color : #969696;	
`

export const SearchInfoSwitch = styled.div`
	float: right;
	font-size : 13px;
	transition: all .5s ;
	cursor: pointer;
	.spin{
		margin-right : 5px;
		display:inline-block;
		font-size : 13px;
		font-weight:bolder;
		&.rotate-enter{
			transform: rotate(180deg);
			transform-origin: center center;
			transition: all .5s ;
		}
		&.rotate-exit{
			transform: rotate(0deg);
			transform-origin: center center;
			transition: all .5s ;
		}
	}
`

export const SearchInfoItem = styled.a`
	display: block;
	float: left;
	font-size: 12px;
	margin-right: 10px;
	margin-bottom: 15px;
	padding : 0 5px;
	line-height: 12px;
	border: 1px solid #ddd;
	color : #787878;
	boder-radius: 3px;
	padding : 5px;
`

export const Addition = styled.div`
	width: 20%;
	position : absolute;
	right : 30px;
	top: 0;
	height : 56px;
	box-sizing: border-box;
`;

export const Btn = styled.div`
	float: right;
	margin-top: 9px;
	margin-right : 20px;
	padding : 0 20px;
	line-height :  38px;
	border-radius : 20px;
	border: 1px solid #ec6149;
	color: #ea6f5a;
	cursor: pointer;
    &.write{
    	background : #ea6f5a;
    	color: #fff;
    }
`;