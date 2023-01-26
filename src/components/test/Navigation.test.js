import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

import Navigation from '../Navigation';

test('Navigation gets user interaction', () => {
  render(
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>,
  );
  const linkElement = screen.getByText(/Math Magicians/i);
  expect(linkElement).toBeInTheDocument();
});

test('Navigation renders correctly', () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
