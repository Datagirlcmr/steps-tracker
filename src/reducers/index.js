import { combineReducers, applyMiddleware, createStore } from 'redux';

import thunk from 'redux-thunk';
import stepsReducer from './steps';
import userReducer from './users';
import singleStepReducer from './single';

const finalReducer = combineReducers({
  user: userReducer,
  steps: stepsReducer,
  single: singleStepReducer,
});

const middlewares = [thunk];

const store = createStore(finalReducer, applyMiddleware(...middlewares));

export default store;