import {
  getToken, saveToken, saveDetails, getDetails,
} from '../actions/index';

import {
  LOGIN, LOGOUT, FETCH_USER_DETAILS, LOGIN_USER_PENDING,
} from '../actions/actionType';

const initialState = {
  logged_in: false,
  auth_token: getToken() !== null ? getToken() : '',
  details: getDetails() !== null ? getDetails() : {
    details: {},
  },
  pending: false,
  error: '',
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      saveToken(action.payload.auth_token);
      return {
        ...state,
        logged_in: true,
        auth_token: getToken(),
        pending: false,
      };
    case LOGOUT:
      localStorage.clear();
      return {
        ...state,
        logged_in: false,
        auth_token: '',
        details: getDetails(),
        token: getToken(),
      };
    case FETCH_USER_DETAILS:
      saveDetails(action.payload);
      return {
        ...state,
        loggged_in: true,
        pending: false,
        details: getDetails(),
      };
    case LOGIN_USER_PENDING:
      return {
        ...state,
        pending: true,
      };
    default:
      return state;
  }
}

export default userReducer;
