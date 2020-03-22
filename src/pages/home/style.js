import styled  from 'styled-components';

export const HomeWrapper = styled.div`
	padding-top: 30px;
    padding-right: 0;
	width : 960px;
	margin: 0 auto;
`

export const HomeLeft = styled.div`
	width : 625px;
	margin-left 15px;
	padding-top-30px;
	float: left;
`

export const HomeRight = styled.div`
	width : 240px;
	float: right;
	.recommande{
		margin-bottom: 6px;
    	border-radius: 4px;
    	width:280px;
    	height:50px;
	}
`

export const HeadImg = styled.img`
	margin: 0px 5px 15px 5px;
	width : 625px;
	height: 250px;
`

export const Article = styled.div`
	min-height: 140px;
	margin: 0 0 15px;
`

export const AtricleTile = styled.div`
	font-size: 18px;
	font-weight: 700;
	line-height: 1.5;	
`

export const AtricleText = styled.div`
	margin: 0 0 8px;
    font-size: 13px;
    line-height: 24px;
    color: #999;
`

export const AtricleInfo = styled.div`
	padding-right: 0!important;
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
`

export const AtricleInfoItem = styled.div`
	display: inline-block;
	margin-right: 10px;
	margin-bottom: 10px;
    color: #b4b4b4;
    &.AtricleInfoDiamond{
    	color: #ea6f5a;
    }
`

export const TopicWrapper = styled.div`
	padding: 20px 0 10px 0;
	overflow: hidden;
	margin-left: -18px;
	border-bottom: 1px solid #dcdcdc;
`

export const TopicItem = styled.div`
	box-sizing: border-box;
	height:32px;
	line-height: 32px;
	font-size: 14px;
	border:2px solid #dcdcdc;
	float: left;
	background : #f7f7f7;
	color:#000;
	border-radius: 4px;
	padding-right: 10px;
	margin-left: 18px;
	margin-bottom: 18px;
	cursor:pointer;
	box-sizing:border-box;
	.img{
		display:block;
		float:left;
		height:26px;
		width:26px;
		margin-right:10px;
		margin-top:2px;
	}
`

export const ListItem = styled.div`
	overflow: hidden;
	padding: 20px 0;
	border-bottom: 1px solid #dcdcdc;
	.pic{
		width: 150px;
		height:100px;
		display:block;
		float:right;
		border-radius: 10px;
	}
`

export const ListInfo = styled.div`
	width: 450px;
	float:left;
	.title{
		font-size:18px;
		line-height:27px;
		font-weight:bolder;
		color:#333;
	}
	.desc{
		font-size:13px;
		line-height:24px;
		color:#999;
	}
`

export const ListDesc = styled.div`
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    .descItem{
    	float:left;
    	margin-right:10px;
    	color: #b4b4b4
    }
    .iconfont{
    	font-family: iconfont!important;
	    font-size: inherit;
	    font-style: normal;
	    font-weight: 400!important;
	    margin-right: 3px;
    }
    .diamond{
    	color: #ea6f5a;
    }
`

export const CodeApp = styled.div`
	padding: 7px 10px;
	width: 280px;
	height: 82px;
    border: 1px solid #f0f0f0;
    border-radius: 6px;
    background-color: #fff;
    box-sizing:border-box;
    overflow:hidden;
    .content{
    	float:left;
    	margin-left: 2px;
	    .title{
	    	font-size: 15px;
	    	color: #333;
	    	margin: 13px 0 11px 10px;

	    }
	    .text{
	    	font-size: 13px;
	    	margin-top: 4px;
	    	color: #999;
	    	margin-left:10px;
	    }
    }
	.code{
		float:left;
		width: 60px;
    	height: 60px;
	}
`

export const WriterWrapper = styled.div`
	width:280px;
	height:360px;
	margin-top: 30px;
	overflow : hidden;
	.recommandeWriter{
		display: inline-block;
		font-size: 14px;
    	color: #969696;
	}
	.spin{
		float: right;
	    display: inline-block;
	    font-size: 14px;
	    color: #969696;
	}
`

export const WriterItem = styled.div`
	width:219px;
	height:48px;
	box-sizing:border-box;
	overflow : hidden;
	margin-top: 20px;
	.pic{
		float: left;
    	width: 48px;
    	height: 48px;
    	margin-right: 10px;
    	border-radius: 24px;
	}
	.name{
		padding-top: 5px;
	    margin-right: 60px;
	    font-size: 14px;
	    display: block;
	    margin-bottom: 10px;
	}
	.desc{
		margin-top: 2px;
	    font-size: 12px;
	    color: #969696;
	}
`

