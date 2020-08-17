import { LOGIN_USER, BASE_URL } from "./index";
import { inputValidation, loadingIcon } from "../helper/index";

function createUser(data) {
  return (dispatch) => {
  
    fetch(`${BASE_URL}/users`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(data),
      })
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        if (res.auth_token !== undefined) {
          dispatch(LOGIN_USER(res));
        } else {
          loadingIcon();
          inputValidation(res);
        }
        return res;
      })
      .catch((error) => error);
  };
}

export default createUser;
