import {
  FETCH_STEPS_ERROR,
  FETCH_SINGLE_SUCCESS,
  FETCH_STEPS_SUCCESS,
  FETCH_USER_DETAILS,
  LOGIN,
  LOGOUT,
  ADD_FAVORITE,
} from './actionType';

const fetchStepsPending = type => ({
  type,
});

const saveToken = token => {
  localStorage.setItem('token', JSON.stringify(token));
};

const saveDetails = details => {
  localStorage.setItem('details', JSON.stringify(details));
};

const getDetails = () => {
  const res = localStorage.getItem('details');
  return JSON.parse(res);
};

const getToken = () => {
  const res = localStorage.getItem('token');
  return JSON.parse(res);
};

const fetchStepsSuccess = payload => ({
  type: FETCH_STEPS_SUCCESS,
  payload,
});

const fetchStepsError = payload => ({
  type: FETCH_STEPS_ERROR,
  payload,
});

const fetchSingleItem = payload => ({
  type: FETCH_SINGLE_SUCCESS,
  payload,
});

const LOGIN_USER = payload => ({
  type: LOGIN,
  payload,
});

const LOGOUT_USER = () => ({
  type: LOGOUT,
});

const FetchUserDetails = payload => ({
  type: FETCH_USER_DETAILS,
  payload,
});

const AddFavorite = () => ({ type: ADD_FAVORITE });

const BASE_URL = 'http://localhost:3000';

export {
  FETCH_STEPS_ERROR,
  fetchStepsError,
  fetchStepsPending,
  FetchUserDetails,
  fetchStepsSuccess,
  fetchSingleItem,
  saveToken,
  LOGIN_USER,
  saveDetails,
  getDetails,
  AddFavorite,
  getToken,
  LOGOUT_USER,
  BASE_URL,
};