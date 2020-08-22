import stepsReducer from '../reducers/steps';

const initialState = {
  pending: false,
  steps: [],
  error: '',
};

describe('update categpry', () => {
  it('should update the pending status', () => {
    expect(stepsReducer(initialState, { type: 'FETCH_STEPS_SUCCESS', steps: [{}, {}, {}] })).toEqual({ ...initialState, steps: [{}, {}, {}] });
  });
  it('should save the erros to the state ', () => {
    expect(stepsReducer(initialState, { type: 'FETCH_STEPS_ERROR', error: 'Undefined id for steps' })).toEqual({ ...initialState, error: 'Undefined id for steps' });
  });
});
