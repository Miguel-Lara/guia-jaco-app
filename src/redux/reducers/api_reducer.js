import * as types from '../types';

export default function(state = {}, action) {
  switch (action.type) {
    case types.GET_SINGLE:
      return { ...state, payload: action.payload };
    case types.SEARCH:
      return { ...state, payload: action.payload };
    case types.SEND_FORM:
      return { ...state, payload: action.payload };
    default:
      return state;
  }
}
