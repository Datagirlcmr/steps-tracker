import {
  fetchStepsError,
  fetchStepsPending,
  LOGIN_USER,
  BASE_URL,
} from './index';

import { LOGIN_USER_PENDING } from './actionType';

function loginUser(data) {
console.log(data)
  return dispatch => {

    dispatch(fetchStepsPending(LOGIN_USER_PENDING));
    fetch(`${BASE_URL}/auth/login`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(data),
      })
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw (res.error);
        }
        console.log(res)
        if (res.auth_token !== undefined) {
          dispatch(LOGIN_USER(res));
        }
        return res;
      })
      .catch(error => {
        dispatch(fetchStepsError(error));
      });
  };
}

export default loginUser;