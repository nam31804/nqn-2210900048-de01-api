import { render, screen } from '@testing-library/react';
import NqnApp from './NqnApp';

test('renders learn react link', () => {
  render(<NqnApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
