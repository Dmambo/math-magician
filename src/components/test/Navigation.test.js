import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

import Navigation from '../Navigation';

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
