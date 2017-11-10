import React from 'react';
import { HashRouter } from 'react-router-dom';
// import { Route, Redirect } from 'react-router';
import { Route } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import '../src/asset/css/index.css';
import App from '../src/component/App';
import rd from 'reducer/'

const store = createStore(
    rd,
	applyMiddleware(thunk)
)

module.exports = class Cp extends Component {
  render(){
    return(
      <Provider store={store}>
          <HashRouter>
              <div style={{height: '100%'}}>
              <Route path='/' component={App} />
              <Route path='/login' component={App} />
              {/* <Redirect from='*' to='/' /> */}
              </div>
          </HashRouter>
      </Provider>
    )
  }
}