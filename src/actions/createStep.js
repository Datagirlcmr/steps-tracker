import { fetchStepsPending, BASE_URL } from './index';
import  inputValidation from '../helper/index';
import { CREATE_STEP_PENDING } from './actionType';

function createSTEP(data, token, callBack) {
  return dispatch => {
    // loadingIcon();
    dispatch(fetchStepsPending(CREATE_STEP_PENDING));
    const event = new FormData();
    for (const name in data) {
      event.append(name, data[name]);
    }
    const requestOptions = {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: event,
    };
    fetch(`${BASE_URL}/steps`, requestOptions)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw res.error;
        }
        if (res.id === undefined) {
          inputValidation(res);
          // loadingIcon();
        } else {
          callBack();
        }
      })
      .catch(error => error);
  };
}

export default createSTEP;