import styled  from 'styled-components';

export const Page = styled.div`
	position: relative;
	.alert{
		position: absolute;
		left:50%;
		right:0;
		top:60px;
		transform: translate(-50%,0);
		width:400px;
	}
`

export const LoginWrapper = styled.div`
	position: absolute;
	top:50%;
	left:50%;
	transform: translate(-50%,75%);
	background:"#fff";
	width:400px;
	height:300px;
	background:#f1f1f1;
	border-radius: 10px;
`

export const LoginUser = styled.div`
	padding-top: 90px;
	margin-bottom:20px;
	.text{
		display :inline-block;
		width:60px;
		text-align:right;
		margin-right: 10px;
	}
	#username{
		width:300px
	}
`

export const LoginPwd = styled.div`
	margin-bottom:20px;
	.text{
		display :inline-block;
		width:60px;
		text-align:right;
		margin-right: 10px;
	}
	#password{
		width:300px
	}
`

export const LoginBtn = styled.div`
	padding-left:160px;
`