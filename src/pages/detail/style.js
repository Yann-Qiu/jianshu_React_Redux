import styled  from 'styled-components';


export const Page = styled.div`
	background-color: #f9f9f9;
	width : 100%;
	min-height: 960px;
	padding-top: 70px;
	box-sizing: border-box;
`

export const Button = styled.div`
	position:fixed;
	width:55px;
	left:185px;
	top: 200px;
	.word{
		height: 19px;
		font-size: 14px;
	    text-align: center;
	    color: #969696;
	    margin-top:5px;
	    margin-bottom:10px;
	    cursor : pointer;
	}
	.like{
		cursor : pointer;
		height: 48px;
		width: 48px;
		text-align: center;
		line-height: 48px;
		background: #fff;
		border-radius:50%;
		.iconfont{
			font-size: 18px;
			color: #969696;
		}
	}
	.prime{
		cursor : pointer;
		height: 48px;
		width: 48px;
		text-align: center;
		line-height: 48px;
		background: #fff;
		border-radius:50%;
		.iconfont{
			font-size: 18px;
			color: #969696;
		}
	}
`

export const DetailWrapper = styled.div`
	float:left;
	padding: 24px;
	width : 682px;
	margin-left:250px;
	margin-right: 15px;
	background-color: #fff;
	min-height: 800px;
	box-sizing: border-box;
`

export const DetailTitle = styled.div`
	font-size: 30px;
    font-weight: 700;
    color: #404040;
    margin-top: 0;
    margin-bottom: .5em;	
`

export const DetailText = styled.div`
	margin-bottom: 20px;
	margin-top: 0;
	color: #404040;	
	font-weight: 400;
    line-height: 40px;
    font-size: 16px;
    box-sizing: border-box;
    padding :3px;
`

export const DetailWriter = styled.div`
	margin-bottom: 32px;
	height:48px;
    width :100%;
    box-sizing: border-box;
    overflow:hidden;
    .pic{
    	float:left;
    	display: block;
    	border-radius: 50%;
	    border: 1px solid #eee;
	    min-width: 48px;
	    min-height: 48px;
	    width: 48px;
	    height: 48px;
    }
    .detailInfo{
    	float:left;
    	margin-left:15px;
    	box-sizing:border-box;
    	.name{
			font-size: 16px;
    		font-weight: 500;
    		margin-top: 3px;
    		margin-bottom: 6px;
    	}
    	.desc{
    		.descItem{
    			margin-right: 10px;
    			font-size: 13px;
    			color: #969696;
    			&.diamond{
    				color: #ec7259;
    				font-size: 13px;
    				margin-right: 10px;
    				.iconfont{
    					margin-right: 3px;
    				}
    			}
    		}
    	}
    }
`

export const DetailSide = styled.div`
	float: left;
	width:228px;
	min-height: 300px;
	padding :18px; 
	background:#fff;
`


