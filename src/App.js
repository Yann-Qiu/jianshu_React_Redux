import React,{ Component,Fragment } from 'react';
import { GlobalStyle } from './style.js';
import { IconFont } from './img/IconFont/iconfont.js';
import Header from './common/header/index.js';
import store from './store/index.js';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/detail';

class App extends Component {
  render(){
    return (
      <Fragment>
      	<Provider store = {store}>
	        <GlobalStyle />
	        <IconFont />
	        <Header />
          <BrowserRouter>
            <Route path='/'  exact component={Home}></Route>
            <Route path='/detail' exact component={Detail}></Route>
          </BrowserRouter>
	    </Provider>
      </Fragment>
      );
  }
}

//test
//test2

export default App;
