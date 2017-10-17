/**
 * Created by pei_zhou on 2017-10-17 10:46:54 
 */
import React, {Component} from 'react';

export default class Cp extends Component{
    constructor(props){
        super(props);
    };
    bindThis(...methods) {
        methods.forEach((method) => {
            this[method] = this[method].bind(this);
        });
    }
}