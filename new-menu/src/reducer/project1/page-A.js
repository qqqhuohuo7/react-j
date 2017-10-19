/**
 * Created by pei_zhou on 2017-10-18 14:37:54 
 */
import { handleActions } from 'redux-actions';
const state = {
    initialValue:[]
};

const Rd = handleActions({
    REQUEST_POSTS(state, { payload }){
        return({
            ...state,
            data:{},
            timeStamp: new Date().getTime()
        })
    },
    RECEIVE_POSTS(state, { payload }){
        return({
            ...state,
            data: payload.data,
            timeStamp: new Date().getTime()
        })
    }
}, state);

export default Rd;