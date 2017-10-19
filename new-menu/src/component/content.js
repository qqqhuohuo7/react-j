/**
 * Created by pei_zhou on 2017-10-17 10:31:14 
 */
import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import { Layout } from 'antd';
import PageA from 'container/project1/page-A';
import PageB from './page/project1/page-B';

const { Content } = Layout;

export default class Contents extends Component {
    render() {
        return(
            <Content>
                <Route path='/page1' component={PageA}/>
                <Route path='/page2' component={PageB}/>
            </Content>
        )
    }
}