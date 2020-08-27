import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../reducers/index';
import Dashboard from '../containers/Dashboard';

test('renders learn react link', () => {
  render(
    <Router>
      <Provider store={store}>
        <Dashboard />
      </Provider>
    </Router>,
  );
  expect(screen.getByPlaceholderText('Enter Your Weight')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Enter the Number of Steps Taken')).toBeInTheDocument();
  expect(screen.getByText(/Welcome User/i)).toBeInTheDocument();
});
