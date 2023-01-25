import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

import Calculator from '../calculator';

// test calculator with user interaction
test('Calculator gets user interaction', () => {
  render(
    <BrowserRouter>
      <Calculator />
    </BrowserRouter>,
  );
  const linkElement = screen.getByText(/Let's do some math!/i);
  expect(linkElement).toBeInTheDocument();
});

// test calculator with snapshot
test('Calculator renders correctly', () => {
  const tree = renderer

    .create(
      <BrowserRouter>
        <Calculator />
      </BrowserRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
