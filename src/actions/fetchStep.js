import {
    fetchStepsPending, fetchSingleStep, fetchStepsError, BASE_URL,
  } from './index';
  import { FETCH_SINGLE_PENDING } from './actionType';
  
  function fetchSingle(token, id, method) {
    return dispatch => {
      dispatch(fetchStepsPending(FETCH_SINGLE_PENDING));
      const requestOptions = {
        method,
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      };
  
      fetch(`${BASE_URL}/steps/${id}`, requestOptions)
        .then(res => res.json())
        .then(res => {
          if (res.error) {
            throw res.error;
          }
          dispatch(fetchSingleStep(res));
        })
        .catch(error => {
          dispatch(fetchStepsError(error));
        });
    };
  }
  export default fetchSingle;