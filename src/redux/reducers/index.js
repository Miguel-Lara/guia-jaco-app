import { combineReducers } from 'redux';
import config from './config_reducer';
import api from './api_reducer';
import form from './form_reducer';

const rootReducer = combineReducers({
  config,
  api,
  form
});

export default rootReducer;
