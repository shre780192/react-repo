import {render, screen, cleanup} from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import SignIn from '../SignIn'
import { unmountComponentAtNode } from "react-dom";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("fetch from server mock success", async () => {
    const credentials =
        [
            {
                "username": "John Doe",
                "password": "password1"
            },
            {
                "username": "Jane Doe",
                "password": "password2"
            }
        ];
    
    jest.spyOn(global, "fetch").mockImplementation(() =>
        Promise.resolve({
            json: () => Promise.resolve(credentials)
        })
    );
  
    // Use the asynchronous version of act to apply resolved promises
    await act(async () => {
        render(<SignIn />, container);
    });
  
    expect(container).not.toBeUndefined();
  
    // remove the mock to ensure tests are completely isolated
    global.fetch.mockRestore();
});