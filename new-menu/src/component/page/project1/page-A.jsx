/**
 * Created by pei_zhou on 2017-10-17 10:45:35 
 */
import React from 'react';
import Component from '../pageComponent';
import {Button, Table} from 'antd';

export default class Cp extends Component{
    constructor(props){
        super(props)
        this.bindThis('getData');
        this.columns = [
            { title: 'rank', width: 100, dataIndex: 'rank', key: 'rank', fixed: 'left' },
            { title: 'fullName', width: 100, dataIndex: 'album_id', key: 'album_id', fixed: 'left' },
            { title: 'Column 1', dataIndex: 'album_no', key: '1', width: 150 },
            { title: 'Column 2', dataIndex: 'all_artist_id', key: '2', width: 150 },
            { title: 'Column 3', dataIndex: 'all_rate', key: '3', width: 150 },
            { title: 'file_duration', dataIndex: 'file_duration', key: '4', width: 150 },
            { title: 'publishtime', dataIndex: 'publishtime', key: '5', width: 150 },
            { title: 'Column 6', dataIndex: 'song_source', key: '6', width: 150 },
            { title: 'versions', dataIndex: 'versions', key: '7', width: 150 },
            { title: 'author', dataIndex: 'author', key: '8' },
            {
                title: 'Action',
                key: 'operation',
                fixed: 'right',
                width: 100,
                render: () => <a>action</a>,
            },
        ];
        this.state = {
            data: [],
        };
    }
    componentDidMount() {
        if(typeof(this.props.getData)==='function'){
            this.props.getData();
        }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.data){
            this.setState({
                data:nextProps.data.song_list
            })
        }
    }
    getData(){
        if(typeof(this.props.getData)==='function'){
            this.props.getData();
        }
    }
    render() {
        return (
            <div>
                <Button onClick={this.getData}>reaload</Button>
                <Table columns={this.columns} dataSource={this.state.data} scroll={{ x: 1500, y: 400 }} />
            </div>
        )
    }
}