import { combineReducers, applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

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

const store = createStore(finalReducer, composeWithDevTools(applyMiddleware(...middlewares)));

export default store;
