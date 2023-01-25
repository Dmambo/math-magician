import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

import Quotes from '../Quotes';

test('Quotes gets user interaction', () => {
  render(
    <BrowserRouter>
      <Quotes />
    </BrowserRouter>,
  );
  const linkElement = screen.getByText(/Galileo Galilei/i);
  expect(linkElement).toBeInTheDocument();
});
// test Quotes with snapshot

test('Quotes renders correctly', () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <Quotes />
      </BrowserRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
