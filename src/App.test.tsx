import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hellow world text', () => {
  render(<App />);
  const hello = screen.getByText(/Hello world/i);
  expect(hello).toBeInTheDocument();
});
