import STEPS_API from './index';


function createStep(data, token, callBack) {
  return dispatch => {
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
    fetch(`${STEPS_API}/steps`, requestOptions)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw res.error;
        }
        if (res.id === undefined) {
        //   inputValidation(res);
        //   loadingIcon();
        } else {
          callBack();
        }
      })
      .catch(error => error);
  };
}

export default createStep;
