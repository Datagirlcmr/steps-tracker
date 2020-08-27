import singleReducer from '../reducers/single';

const initialState = {
  pending: false,
  details: { title: 'hi' },
  error: '',
};

describe('update status', () => {
  it('should update the pending status', () => {
    expect(
      singleReducer(initialState, 'FETCH_SINGLE_PENDING'),
    ).toEqual({ ...initialState, pending: false });
  });
  it('should return step details', () => {
    expect(
      singleReducer(initialState, 'FETCH_SINGLE_SUCCESS'),
    ).toEqual({ ...initialState, details: { title: 'hi' } });
  });
});
