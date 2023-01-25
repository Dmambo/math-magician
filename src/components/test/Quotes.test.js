import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

import Quotes from '../Quotes';

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
