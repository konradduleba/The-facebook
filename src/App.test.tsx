import React from 'react';
import { render, screen } from '@testing-library/react';
import MainPage from './Components/MainPage/MainPage';

test('renders learn react link', () => {
  render(<MainPage />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
