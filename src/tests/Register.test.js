import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../reducers/index';
import Register from '../containers/Register';

test('renders learn react link', () => {
  render(
    <Router>
      <Provider store={store}>
        <Register />
      </Provider>
    </Router>,
  );
  expect(screen.getByPlaceholderText('Name')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Email Address')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Password Confirmation')).toBeInTheDocument();
  expect(screen.getByText(/Register/i)).toBeInTheDocument();
});
