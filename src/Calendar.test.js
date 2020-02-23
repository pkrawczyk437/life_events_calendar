import React from 'react';
import { render } from '@testing-library/react';
import Calendar from './Calendar';

test('renders learn react link', () => {
  const { getByText } = render(<Calendar />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
