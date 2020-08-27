import userReducer from '../reducers/users';

const initialState = {
  logged_in: false,
  auth_token: '',
  details: {
    details: {},
  },
  pending: false,
  error: '',
};

describe('update status', () => {
  it('should update the login status', () => {
    expect(userReducer(initialState, 'FETCH_USER_DETAILS')).toEqual({ ...initialState, logged_in: false });
  });
  it('should get logout the user and return the initial state', () => {
    expect(userReducer(initialState, { type: 'LOGOUT' })).toEqual({ ...initialState, details: null, token: null });
  });
});
