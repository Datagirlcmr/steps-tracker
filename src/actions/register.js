import { LOGIN_USER, BASE_URL } from "./index";
import inputValidation from "../helper/index";

function createUser(data) {
  return dispatch => {
    const event = new FormData();
    for (const name in data) {
      event.append(name, data[name]);
    }
    fetch(`${BASE_URL}/users`,
      {
        method: 'POST',
        body: event,
      })
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw (res.error);
        }
        if (res.auth_token !== undefined) {
          dispatch(LOGIN_USER(res));
        } else {
          inputValidation(res);
        }
        return res;
      })
      .catch(error => error);
  };
}

export default createUser;