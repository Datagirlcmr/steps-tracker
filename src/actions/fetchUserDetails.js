import {
  fetchStepsPending, fetchStepsError, FetchUserDetails, BASE_URL,
} from './index';

import { LOGIN_USER_PENDING } from './actionType';

function fetchUser(token) {
  return dispatch => {
    dispatch(fetchStepsPending(LOGIN_USER_PENDING));
    fetch(`${BASE_URL}/profile`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw res.error;
        }
        dispatch(FetchUserDetails(res));
      })
      .catch(error => {
        dispatch(fetchStepsError(error));
      });
  };
}
export default fetchUser;