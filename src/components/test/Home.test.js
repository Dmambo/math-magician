import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

import Home from '../Home';

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
