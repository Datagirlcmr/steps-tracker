import { loginUser, STEPS_API } from './index';

function createUser(data) {
    return dispatch => {
        const event = new FormData();
        for (const name in data) {
            event.append(name, data[name]);
        }
        fetch(`${STEPS_API}/users`,
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
                    dispatch(loginUser(res));
                    //   } else {
                    //     inputValidation(res);
                }
                return res;
            })
            .catch(error => error);
    };
}

export default createUser;
