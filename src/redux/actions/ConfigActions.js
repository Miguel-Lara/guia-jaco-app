import axios from 'axios';
import * as types from '../types';

export function getConfig() {
  // const url = `${process.env.REACT_APP_API_URL}config/`;
  const url = process.env.REACT_APP_API_URL + '?file_name=config';
  const request = axios.get(url).then(response => response.data);
  return {
    type: types.GET_CONFIG,
    payload: request
  };
}
