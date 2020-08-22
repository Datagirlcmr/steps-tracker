import { LOGIN_USER, fetchSingleStep } from '../actions/index';

describe('dispatch an action with the user token', () => {
  it('should return the user token', () => {
    expect(LOGIN_USER({ auth_token: '12345' })).toEqual({ type: 'LOGIN', auth_token: '12345' });
  });
});

describe('fetch details of a single step', () => {
  it('return the details of the fetched step', () => {
    expect(fetchSingleStep({ day_recorded: '2020-11-11' })).toEqual({ type: 'FETCH_SINGLE_SUCCESS', details: { day_recorded: '2020-11-11' } });
  });
});
