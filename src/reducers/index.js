import { combineReducers, applyMiddleware, createStore } from 'redux';

import thunk from 'redux-thunk';
// import itemsReducer from './items';
import userReducer from './users';
// import singleItemReducer from './single';

const finalReducer = combineReducers({
  user: userReducer,
//   items: itemsReducer,
//   single: singleItemReducer,
});

const middlewares = [thunk];

const store = createStore(finalReducer, applyMiddleware(...middlewares));

export default store;