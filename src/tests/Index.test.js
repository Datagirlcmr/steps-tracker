import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
// import { Provider } from 'react-redux';
import Welcome from '../components/index';

test('renders learn react link', () => {
  render(
    <Router>
      <Welcome />
    </Router>,
  );
  expect(screen.getByText('LOGIN')).toBeInTheDocument();
  expect(screen.getByText('REGISTER')).toBeInTheDocument();
});
