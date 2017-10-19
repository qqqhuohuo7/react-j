import React from 'react';
import { render } from 'react-dom';
// import { Router } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import { Route, Redirect } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import './asset/css/index.css';
import App from './component/App';
// import createBrowserHistory from 'history/createBrowserHistory';
import registerServiceWorker from './registerServiceWorker';

// const customHistory = createBrowserHistory()
import rd from 'reducer/'

const store = createStore(
    rd,
	applyMiddleware(thunk)
)

render(
    <Provider store={store}>
        <HashRouter>
            <div style={{height: '100%'}}>
            <Route path='/' component={App} />
            <Route path='/login' component={App} />
            {/* <Redirect from='*' to='/' /> */}
            </div>
        </HashRouter>
    </Provider>,
    document.getElementById('root')
);
/* render(
    <Router history={customHistory} >
        <div style={{height: '100%'}}>
        <Route path='/' component={App} />
        </div>
    </Router>,
    document.getElementById('root')
); */
registerServiceWorker();
