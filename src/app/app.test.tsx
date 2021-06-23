import { render } from '@testing-library/react';
import App from '.';

test('App wrapper test', () => {
  const { queryByText, debug } = render(<App />);

  debug();

  expect(queryByText(/^React Application$/)).not.toBeNull();
});
