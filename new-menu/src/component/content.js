/**
 * Created by pei_zhou on 2017-10-17 10:31:14 
 */
import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import { Layout } from 'antd';
import Bundle from './AsyncLoadModule';
import 'asset/css/content.css';

const { Content } = Layout;
const PageA = (props) => (
    <Bundle load={() => import('../container/project1/page-A')}>
        {(PageA) => <PageA {...props}/>}
    </Bundle>
);
const PageB = (props) => (
    <Bundle load={() => import('./page/project1/page-B')}>
        {(PageB) => <PageB {...props}/>}
    </Bundle>
);
export default class Contents extends Component {
    render() {
        return(
            <Content className='content'>
                <Route path='/page1' component={PageA}/>
                <Route path='/page2' component={PageB}/>
            </Content>
        )
    }
}