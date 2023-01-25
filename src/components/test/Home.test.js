import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

import Home from '../Home';

// test Home with user interaction
test('Home gets user interaction', () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>,
  );
  const linkElement = screen.getByText(/Welcome to our page!/i);
  expect(linkElement).toBeInTheDocument();
});

// test Home with snapshot
test('Home renders correctly', () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
