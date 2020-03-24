import React,{ Component,Fragment } from 'react';
import { GlobalStyle } from './style.js';
import { IconFont } from './img/IconFont/iconfont.js';
import Header from './common/header/index.js';
import store from './store/index.js';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Detail from './pages/detail';
import Write from './pages/Write';
import './App.css';

class App extends Component {
  render(){
    return (
      <Fragment>
      	<Provider store = {store}>
	        <GlobalStyle />
	        <IconFont />
          <BrowserRouter>
            <Header />
            <Route path='/'  exact component={Home}></Route>
             <Route path='/write'  exact component={Write}></Route>
            <Route path='/login'  exact component={Login}></Route>
            <Route path='/detail/:id?' exact component={Detail}></Route>
          </BrowserRouter>
	    </Provider>
      </Fragment>
      );
  }
}

export default App;
