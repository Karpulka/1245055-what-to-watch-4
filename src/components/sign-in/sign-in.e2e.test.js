import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {SignIn} from "./sign-in";

Enzyme.configure({
  adapter: new Adapter()
});

it(`Click by Show More btn`, () => {
  const handleSubmitButtonClick = jest.fn();

  const signInComponent = mount(
      <SignIn login={handleSubmitButtonClick} isEmailValid={true} errorMessage={``} />, {
        createNodeMock: () => {
          return {};
        }
      }
  );

  const button = signInComponent.find(`button`);
  button.simulate(`click`, {preventDefault: () => {}});

  expect(handleSubmitButtonClick.mock.calls.length).toBe(1);
});
