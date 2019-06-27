import axios from 'axios';
import * as types from '../types';
import store from '../store';

export function getConfig(fromName = 'N/I') {
  const url = `${process.env.REACT_APP_API_URL}/config`;
  const prevState = store.getState();
  const prevConfig = prevState.config.payload;

  // Cache:
  // If the config exists in cache,
  // then use the cache version.
  // If not exists in cache: then fetch it from DB.
  let payload;
  if (prevConfig) {
    payload = prevConfig;
  } else {
    payload = axios.get(url).then(response => response.data);
  }

  return {
    type: types.GET_CONFIG,
    payload
  };
}
