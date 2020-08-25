import { combineReducers } from 'redux';
import stepsReducer from './steps';
import userReducer from './users';
import singleStepReducer from './single';

const finalReducer = combineReducers({
  user: userReducer,
  steps: stepsReducer,
  single: singleStepReducer,
});

export default finalReducer;
