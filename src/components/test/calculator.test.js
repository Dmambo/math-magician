import { render, screen,fireEvent,cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

import Calculator from '../calculator';
afterEach(cleanup);
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

test('should correctly perform calculations when buttons are clicked', () => {
  const { getByText } = render(<Calculator />);
  const button5 = getByText('5');
  const buttonMinus = getByText('-');
  const button2 = getByText('2');
  const buttonEqual = getByText('=');
  fireEvent.click(button5);
  fireEvent.click(buttonMinus);
  fireEvent.click(button2);
  fireEvent.click(buttonEqual);
  const answer = parseInt(button5.textContent, 10) - parseInt(button2.textContent, 10);
  expect(`${answer}`).toBe('3');
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
