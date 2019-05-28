import axios from 'axios';
import * as types from '../types';

export function search(word, categoryId, order) {
  // const url = `${process.env.REACT_APP_API_URL}search/${word}/${categoryId}/${order}`;
  const url = process.env.REACT_APP_API_URL + '?file_name=results';
  const request = axios.get(url).then(response => response.data.results);
  return {
    type: types.SEARCH,
    payload: request
  };
}

export function getSingle(companyId) {
  // const url = `${process.env.REACT_APP_API_URL}companies/${companyId}`;
  const url = process.env.REACT_APP_API_URL + '?file_name=company';
  const request = axios
    .get(url)
    .then(response => response.data);

  return {
    type: types.GET_SINGLE,
    payload: request
  };
}

export function sendForm(tableName, data) {
  const request = axios
    .post(`${process.env.REACT_APP_API_URL}/contact/${tableName}`, data)
    .then(response => response.data);

  return {
    type: types.SEND_FORM,
    payload: request
  };
}
