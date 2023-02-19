import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders react logo', () => {
  render(<App />);
  const icon = screen.getByAltText('logo');
  expect(icon).toBeInTheDocument();
});
