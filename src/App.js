import React,{ Component,Fragment } from 'react';
import { GlobalStyle } from './style.js';
import { IconFont } from './img/IconFont/iconfont.js';
import Header from './common/header/index.js';
import store from './store/index.js';
import { Provider } from 'react-redux';

class App extends Component {
  render(){
    return (
      <Fragment>
      	<Provider store = {store}>
	        <GlobalStyle />
	        <IconFont />
	        <Header />
	    </Provider>
      </Fragment>
      );
  }
}

export default App;
