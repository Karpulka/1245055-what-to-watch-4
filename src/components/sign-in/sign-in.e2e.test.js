import * as React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {SignIn} from "./sign-in";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import NameSpace from "../../reducer/name-space";
import {StaticRouter} from "react-router-dom";

Enzyme.configure({
  adapter: new Adapter()
});

const mockStore = configureStore([]);

it(`Click by Auth Button btn`, () => {
  const handleSubmitButtonClick = jest.fn();
  const store = mockStore({
    [NameSpace.USER]: {
      authorizationStatus: `NO_AUTH`
    }
  });

  const signInComponent = mount(<Provider store={store}>
    <StaticRouter>
      <SignIn login={handleSubmitButtonClick} isEmailValid={true} errorMessage={``} />
    </StaticRouter>
  </Provider>, {
    createNodeMock: () => {
      return {};
    }
  });

  const button = signInComponent.find(`button`);
  button.simulate(`click`, {preventDefault: () => {}});

  expect(handleSubmitButtonClick.mock.calls.length).toBe(1);
});
