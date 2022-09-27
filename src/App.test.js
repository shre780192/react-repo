import { render, screen } from '@testing-library/react';
import App from './App';
import mockFetch from "./mocks/mockFetch.js";
import jest from '@jest/globals'


test('renders learn react link', () => {
  const app =render(<App />);
  expect(app).toMatchSnapshot();
});
 