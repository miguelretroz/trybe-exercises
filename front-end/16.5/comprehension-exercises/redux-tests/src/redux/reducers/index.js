import { combineReducers } from 'redux';
import clickReducer from './clickReducer';

const rootReducer = combineReducers({ clickReducer });

export default rootReducer;