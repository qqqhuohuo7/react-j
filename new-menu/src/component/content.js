/**
 * Created by pei_zhou on 2017-10-17 10:31:14 
 */
import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import { Layout } from 'antd';
// import PageA from 'container/project1/page-A';
// import PageB from './page/project1/page-B';
import 'asset/css/content.css';

const { Content } = Layout;
const PageA = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('container/project1/page-A').default)
    },'PageA')
}
const PageB = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./page/project1/page-B').default)
    },'PageB')
}
export default class Contents extends Component {
    render() {
        return(
            <Content className='content'>
                <Route path='/page1' getComponent={PageA}/>
                <Route path='/page2' getComponent={PageB}/>
                {/* <Route path='/page1' component={PageA}/>
                <Route path='/page2' component={PageB}/> */}
            </Content>
        )
    }
}