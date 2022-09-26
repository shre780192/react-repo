import {render,  screen, cleanup} from '@testing-library/react'
import Dashboard from '../Dashboard'
import App from '../../App'
import AuthContext from '../../context/AuthProvider'

// const customRender = (ui, {providerProps, ...renderOptions}) => {
//   return render(
//     <AuthContext.Provider {...providerProps}>{ui}</AuthContext.Provider>,
//     renderOptions,
//   )
// }
test('renders dashboard', () => {
  const providerProps = {
    username: 'John',
    password: 'password'
  
  }
  // customRender(<Dashboard />, { providerProps });
  render(
    <AuthContext.Provider value={providerProps}>
      <App />
    </AuthContext.Provider>
  );
    const dashboardElement = screen.getAllByTestId("test1");
    expect(dashboardElement).toBeDefined();
  });
