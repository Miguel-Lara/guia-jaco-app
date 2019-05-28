import { combineReducers } from 'redux';
import config from './config_reducer';
import api from './api_reducer';

const rootReducer = combineReducers({
  config,
  api
});

export default rootReducer;
