import * as types from '../types';

export default function(state = {}, action) {
  switch (action.type) {
    case types.GET_CONFIG:
      return { ...state, payload: action.payload };
    default:
      return state;
  }
}
