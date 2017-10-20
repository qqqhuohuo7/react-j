/**
 * Created by pei_zhou on 2017-10-17 10:46:54 
 */
import {Component} from 'react';

export default class Cp extends Component{
    bindThis(...methods) {
        methods.forEach((method) => {
            this[method] = this[method].bind(this);
        });
    }
}