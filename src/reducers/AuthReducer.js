import { MOBILE_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER } from '../actions/types';

const INITIAL_STATE = { mobile: '', error: '', login: false, loading: false };

export default (state = INITIAL_STATE, action) => {
  console.log(action); // comment_when_production

  switch (action.type) {
    case MOBILE_CHANGED:
      return { ...state, mobile: action.payload, error: '' };
    case LOGIN_USER:
      return { ...state, loading: true, error: '' };
    case LOGIN_USER_SUCCESS:
      return { ...state, login: action.payload, loading: false, error: '' };
    case LOGIN_USER_FAIL:
      return { ...state, error: 'Authentication Failed', loading: false, mobile: '' };
    default:
      return state;
  }
};
