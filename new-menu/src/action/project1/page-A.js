/**
 * Created by pei_zhou on 2017-10-18 14:25:32 
 */
import { createAction } from 'redux-actions';
import fetchJsonp from 'fetch-jsonp';
import moment from 'moment';

import fetch from 'isomorphic-fetch'

// export const REQUEST_POSTS = 'REQUEST_POSTS'
// function requestPosts(subreddit) {
//   return {
//     type: REQUEST_POSTS,
//     subreddit
//   }
// }
const requestPosts = createAction('REQUEST_POSTS', function(param) {
    return {
      param
    }
})

// export const RECEIVE_POSTS = 'RECEIVE_POSTS'
const receivePosts = createAction('RECEIVE_POSTS', function(param, json) {
  return {
    param,
    data: json,//.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
})

export function getData(typeId=2) {
  return dispatch => {
    dispatch(requestPosts(typeId))
    return fetchJsonp(`http://tingapi.ting.baidu.com/v1/restserver/ting?xml&calback=&from=webapp_music&method=baidu.ting.billboard.billList&type=${typeId}&size=100&offset=0`, {
        method: 'GET'
    }).then(response => response.json())
      .then(json => dispatch(receivePosts(typeId, json)))
  }
}

// export const getData1 = createAction('GETDATA', function(typeId=2, searchFields){
//     return fetchJsonp(`http://tingapi.ting.baidu.com/v1/restserver/ting?xml&calback=&from=webapp_music&method=baidu.ting.billboard.billList&type=${typeId}&size=100&offset=0`, {
//         method: 'GET'
//     })
//     .then((res) => {
//         return res.json();
//     })
//     .then((data) => {
//         const songArray = []
//         let songList = data.song_list
//         // if (searchFields && searchFields.country && searchFields.country.toString() !== '0') { // 发行国家搜索
//         //     // eslint-disable-next-line
//         //     songList = songList.filter(ele => ele.country === publishCountry.find(t => t.value === parseInt(searchFields.country), 10).mean)
//         // }
//         // if (searchFields && searchFields.language && searchFields.language.toString() !== '0') { // 歌曲语种搜索
//         //     // eslint-disable-next-line
//         //     songList = songList.filter(ele => ele.language === languageKindList.find(t => t.value === parseInt(searchFields.language), 10).mean)
//         // }
//         // if (searchFields && searchFields.start) { // 发行时间段收索
//         //     songList = songList.filter(ele => moment(ele.publishtime) >= moment(searchFields.start) && moment(ele.publishtime) <= moment(searchFields.end))
//         // }

//         for (let i = 0; i < songList.length; i++) {
//             songArray.push({
//                 title: songList[i].title,
//                 author: songList[i].author,
//                 country: songList[i].country,
//                 language: songList[i].language,
//                 publishtime: songList[i].publishtime,
//             })
//         }
//         return {
//             data: songArray
//         }
//         // this.setState({
//         //     tData: songArray
//         // });
//         // this.setState({
//         //     loading: false
//         // });
//     })
//     .catch((e) => {
//         console.log(e.message);
//     });
//     // return {
//     //     data:[
//     //         {
//     //             id:1
//     //         }
//     //     ]
//     // }
// });