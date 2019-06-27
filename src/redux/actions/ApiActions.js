import axios from 'axios';
import * as types from '../types';

export function search(word, categoryId, order, offset, count) {
  const url = `${process.env.REACT_APP_API_URL}/search`;

  // console.log('search:', url);
  // console.log(word, categoryId, order, offset, count);


  const request = axios
    .post(url, {
      word,
      categoryId,
      order,
      offset,
      count
    })
    .then(response => response.data);
  return {
    type: types.SEARCH,
    payload: request
  };
}

export function getCompany(companyId) {
  const url = `${process.env.REACT_APP_API_URL}/companies/${companyId}`;

  const request = axios.get(url).then(response => response.data);

  return {
    type: types.GET_SINGLE,
    payload: request
  };
}

export function loadByCategory(tableName) {
  const url = `${process.env.REACT_APP_API_URL}/${tableName}`;
  const request = axios.get(url).then(response => response.data.results);
  return {
    type: types.LOAD_SECTION,
    payload: request
  };
}

export function resetApiState() {
  return {
    type: types.API_RESET,
    payload: null
  };
}
