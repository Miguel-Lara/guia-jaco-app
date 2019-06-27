import * as types from '../types';

export default function(state = {}, action) {
  switch (action.type) {
    case types.GET_CONFIG_FULFILLED:
      return { ...state, payload: action.payload };
    case types.GET_CONFIG_REJECTED:
      return { ...state, payload: { error: true } };
    default:
      return state;
  }
}
