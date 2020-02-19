import React from 'react';
import { render } from '@testing-library/react';
import EventsCalendar from './EventsCalendar';

test('renders learn react link', () => {
  const { getByText } = render(<EventsCalendar />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
