import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import StepPreview from '../components/StepPreview';

const props = {
  title: '',
  day_recorded: '',
  steps_recorded: 1000,
  id: 0,
};

test('renders learn react link', () => {
  render(
    <Router>
      <StepPreview props={props} />
    </Router>,
  );
  expect(screen.getByText('Weight:')).toBeInTheDocument();
  expect(screen.getByText(/1000/i)).toBeInTheDocument();
});
