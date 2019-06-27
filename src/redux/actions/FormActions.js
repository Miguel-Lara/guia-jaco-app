import axios from 'axios';
import * as types from '../types';

export function sendForm(data) {
  const url = `${process.env.REACT_APP_API_URL}/contact`;

  if (!data.from) {
    data['from'] = 'empty';
  }
  if (!data.subject) {
    data['subject'] = 'empty';
  }

  const request = axios.post(url, data).then(response => response.data);

  return {
    type: types.SEND_FORM,
    payload: request
  };
}

export function resetForm() {
  return {
    type: types.RESET_FORM,
    payload: false
  };
}
