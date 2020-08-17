import {
    fetchStepsPending, fetchStepsSuccess, fetchStepsError, BASE_URL,
  } from './index';
  
  import { FETCH_STEPS_PENDING } from './actionType';
  
  function fetchSteps(token) {
    return dispatch => {
      dispatch(fetchStepsPending(FETCH_STEPS_PENDING));
      fetch(`${BASE_URL}/Steps`, {
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
          dispatch(fetchStepsSuccess(res));
        })
        .catch(error => {
          dispatch(fetchStepsError(error));
        });
    };
  }
  export default fetchSteps;