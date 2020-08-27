import stepsReducer from '../reducers/steps';

const initialState = {
  pending: false,
  steps: [],
  error: 'Undefined id for steps',
};

describe('update status', () => {
  it('should update the pending status', () => {
    expect(stepsReducer(initialState, 'FETCH_STEPS_SUCCESS')).toEqual({ ...initialState, pending: false });
  });
  it('should save the erros to the state ', () => {
    expect(stepsReducer(initialState, 'FETCH_STEPS_ERROR')).toEqual({ ...initialState, error: 'Undefined id for steps' });
  });
});
