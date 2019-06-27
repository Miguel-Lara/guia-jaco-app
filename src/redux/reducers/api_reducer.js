import * as types from '../types';

export default function(state = {}, action) {
  switch (action.type) {
    case types.GET_SINGLE_FULFILLED:
      return { ...state, payload: action.payload };
    case types.GET_SINGLE_REJECTED:
      return { ...state, payload: { error: true } };
    case types.SEARCH_FULFILLED:
      return { ...state, payload: action.payload };
    case types.SEARCH_REJECTED:
      return { ...state, payload: { error: true } };
    case types.LOAD_SECTION_FULFILLED:
      return { ...state, payload: action.payload };
    case types.LOAD_SECTION_REJECTED:
      return { ...state, payload: { error: true } };
    case types.API_RESET:
      return { ...state, payload: action.payload };
    default:
      return state;
  }
}
