import { fetchStepsPending, BASE_URL } from './index';
import inputValidation from '../helper/index';
import { FETCH_SINGLE_PENDING } from './actionType';

function editStep(data, token, id, callBack) {
  return dispatch => {
    dispatch(fetchStepsPending(FETCH_SINGLE_PENDING));
    const event = JSON.stringify(data);
    const requestOptions = {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: event,
    };
    fetch(`${BASE_URL}/steps/${id}`, requestOptions)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw res.error;
        }
        if (res.id !== undefined) {
          callBack();
        } else {
          inputValidation(res);
        }
        return res;
      })
      .catch(error => error);
  };
}

export default editStep;