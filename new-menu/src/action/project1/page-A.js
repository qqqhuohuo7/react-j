/**
 * Created by pei_zhou on 2017-10-18 14:25:32 
 */
import { createAction } from 'redux-actions';
import fetchJsonp from 'fetch-jsonp';

const requestPosts = createAction('REQUEST_POSTS', function(param) {
    return {
      param
    }
})
const receivePosts = createAction('RECEIVE_POSTS', function(param, json) {
  return {
    param,
    data: json,
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
