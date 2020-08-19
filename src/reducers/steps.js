import { FETCH_STEPS_SUCCESS, FETCH_STEPS_ERROR, FETCH_STEPS_PENDING } from '../actions/actionType';

const initialState = {
  pending: false,
  steps: [],
  error: '',
};

const stepsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STEPS_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_STEPS_SUCCESS:
      return {
        ...state,
        pending: false,
        steps: action.payload,
      };
    case FETCH_STEPS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default stepsReducer;