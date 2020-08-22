import singleReducer from '../reducers/single';

const initialState = {
  pending: false,
  details: {
    step: {},
  },
  error: '',
};

describe('update status', () => {
  it('should update the pending status', () => {
    expect(
      singleReducer(initialState, {
        type: 'FETCH_SINGLE_SUCCESS',
        details: { step: 'steps' },
      }),
    ).toEqual({ ...initialState, details: { step: 'steps' } });
  });
  it('should save the erros to the state ', () => {
    expect(
      singleReducer(initialState, {
        type: 'FETCH_STEPS_ERROR',
        error: 'Invalid Entries',
      }),
    ).toEqual({ ...initialState, error: 'Invalid Entries' });
  });
});
