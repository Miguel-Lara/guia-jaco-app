import * as types from '../types';

export default function(state = {}, action) {
  switch (action.type) {
    case types.SEND_FORM_FULFILLED:
      return { ...state, payload: action.payload };
    case types.SEND_FORM_REJECTED:
      return { ...state, payload: { error: true } };
    case types.RESET_FORM:
      return { ...state, payload: action.payload };
    default:
      return state;
  }
}
