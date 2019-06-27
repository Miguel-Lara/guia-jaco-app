import { createStore, applyMiddleware } from 'redux';
import apiMiddleware from './middlewares/api.middleware';
import promiseMiddleware from 'redux-promise-middleware';
// import { createLogger } from 'redux-logger';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(
  promiseMiddleware,
  apiMiddleware,
  // createLogger()
)(createStore);
export default createStoreWithMiddleware(reducers);
