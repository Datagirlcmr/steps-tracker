import { LOGIN_USER, BASE_URL } from "./index";
import inputValidation from "../helper/index";

function createUser(data) {
  // console.log(data)
  return dispatch => {
    // loadingIcon();
    // const event = new FormData();
    // for (const name in data) {
    //   event.append(name, data[name]);
    // }
    fetch(`${BASE_URL}/users`,
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
          // console.log(res.error)
          throw (res.error);
          
        }
        if (res.auth_token !== undefined) {
          dispatch(LOGIN_USER(res));
        } else {
          inputValidation(res);
        }
        console.log(res)
        return res;
      })
      .catch(error => error);
  };
}

export default createUser;