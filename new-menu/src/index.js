import React from 'react';
import { render } from 'react-dom';
// import { Router } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import { Route, Redirect } from 'react-router';
import './asset/css/index.css';
import App from './component/App';
// import createBrowserHistory from 'history/createBrowserHistory';
import registerServiceWorker from './registerServiceWorker';

// const customHistory = createBrowserHistory()

render(
    <HashRouter>
        <div style={{height: '100%'}}>
        <Route path='/' component={App} />
        <Redirect from='*' to='/' />
        </div>
    </HashRouter>,
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
