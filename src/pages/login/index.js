import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Input, Button} from 'antd';
import { Alert } from 'antd';
import { LoginWrapper,LoginUser,LoginPwd,LoginBtn,Page } from './style.js'
import { actionCreator } from "./store";


class Login extends PureComponent{
	render(){
		const { loginStatus, tryLogin,resetTry } = this.props;
		if(!loginStatus){
			return (
				<Page>
					{
						tryLogin ? 
						<Alert
					      	message="Error Text"
					      	description="Error Description Error Description Error Description Error Description Error Description Error Description"
					      	type="error"
					      	closable
					      	onClose={resetTry}
					      	className="alert"
					    />:
					    null
					}
					<LoginWrapper>
						<form className="form" onSubmit={this.handleSubmit}>
							<LoginUser>
						        <label className="text">
						          用户名
						        </label>
						        <Input type="text" id="username"/>			        
						    </LoginUser>
						    <LoginPwd>
						        <label className="text">
						          密码
						        </label>
						        <Input type="password" id="password"/>				    
						    </LoginPwd>
						    <LoginBtn>
					        	<Button onClick={this.handleSubmit.bind(this)}>提交</Button>
					        </LoginBtn>
					    </form>
					</LoginWrapper>
				</Page>
			  );
		}else{
			return <Redirect to="/" />
		}
	}	

	handleSubmit(){
		const username = document.getElementById("username").value;
		const password = document.getElementById("password").value;
		console.log(username,password)
		this.props.login(username,password);
	}
}

const mapStateToProps = (state)=>{
	return{
		loginStatus : state.getIn(["login","login"]),
		tryLogin : state.getIn(["login","tryLogin"])
	}
}
	
const mapDispatchToProps = (dispatch)=>{
	return{
		login(username,password){
			dispatch(actionCreator.changeLogin(username,password));
		},
		resetTry(){
			setTimeout(()=>{dispatch({type:"resetTry"})},500);
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);