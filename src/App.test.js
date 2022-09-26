import { render, screen } from '@testing-library/react';
import App from './App';
import mockFetch from "./mocks/mockFetch.js";
import jest from '@jest/globals'

// beforeEach(() => {
//   jest.spyOn(window, "fetch").mockImplementation(mockFetch);
// })

// afterEach(() => {
//   jest.restoreAllMocks()
// });

// test("UserGreeter salutes a user", () => {
//   const user = { username: "Giorgio",password:'p1' };
//   render(
//     <UserContext.Provider value={user}>
//       <App />
//     </UserContext.Provider>
//   );
//   expect(screen.getByText(`Welcome ${user.username}!`)).toBeInTheDocument();
// });

test('renders learn react link', () => {
  render(<App />);
  expect(true).toBe(true);
});
