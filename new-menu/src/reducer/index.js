/**
 * Created by pei_zhou on 2017-10-18 16:11:34 
 */
import { combineReducers } from 'redux-immutable';
// import ui from './ui/uiReducers';// import routes from './routes';
import pageA from './project1/page-A';// import routes from './routes';

const rootReducer = combineReducers({
  pageA
});

export default rootReducer;