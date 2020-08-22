import {
  FETCH_STEPS_ERROR,
  FETCH_SINGLE_SUCCESS,
  FETCH_STEPS_SUCCESS,
  FETCH_USER_DETAILS,
  LOGIN,
  LOGOUT,
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

const fetchSingleStep = payload => ({
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

const fetchUserDetails = payload => ({
  type: FETCH_USER_DETAILS,
  payload,
});

const BASE_URL = 'https://obscure-cove-15104.herokuapp.com';

export {
  FETCH_STEPS_ERROR,
  fetchStepsError,
  fetchStepsPending,
  fetchUserDetails,
  fetchStepsSuccess,
  fetchSingleStep,
  saveToken,
  LOGIN_USER,
  saveDetails,
  getDetails,
  getToken,
  LOGOUT_USER,
  BASE_URL,
};
