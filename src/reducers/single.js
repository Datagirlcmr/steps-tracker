import {
  FETCH_SINGLE_SUCCESS,
  FETCH_STEPS_ERROR,
  FETCH_SINGLE_PENDING,
} from "../actions/actionType";

const initialState = {
  pending: false,
  details: {
    step: {},
  },
  error: "",
};

const singleStepReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SINGLE_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_SINGLE_SUCCESS:
      return {
        ...state,
        pending: false,
        details: action.payload,
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

export default singleStepReducer;
