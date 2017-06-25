import { Actions } from 'react-native-router-flux';
import { MOBILE_CHANGED, LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL } from './types';

export const mobileChanged = (text) => {
  return {
    type: MOBILE_CHANGED,
    payload: text
  };
};

export const loginUser = ({ mobile }) => {
    return (dispatch) => {
      dispatch({ type: LOGIN_USER });

      if (mobile === '5555') {
        setTimeout(() => {
          dispatch({ type: LOGIN_USER_SUCCESS, payload: true });
          Actions.main({ type: 'reset' }); // Reset navigation stack
        }, 2000);
      } else { // eslint-disable-line no-else-return
        setTimeout(() => {
          dispatch({ type: LOGIN_USER_FAIL, payload: true });
        }, 2000);
      }
    };
};
