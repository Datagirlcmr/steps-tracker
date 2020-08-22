import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../reducers/index';
import Login from '../containers/Login';

test('renders learn react link', () => {
  render(
    <Router>
      <Provider store={store}>
        <Login />
      </Provider>
    </Router>,
  );
  expect(screen.getByPlaceholderText('Email Address')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
  expect(screen.getByText('Login')).toBeInTheDocument();
});
