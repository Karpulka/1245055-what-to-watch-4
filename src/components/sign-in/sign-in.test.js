import React from "react";
import renderer from "react-test-renderer";
import {SignIn} from "./sign-in";

it(`Render SignIn Start`, () => {
  const tree = renderer
    .create(<SignIn errorMessage={``} isEmailValid={true} login={() => {}} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Render SignIn Email No Valid`, () => {
  const tree = renderer
    .create(<SignIn errorMessage={`Error`} isEmailValid={false} login={() => {}} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Render SignIn incorrect data`, () => {
  const tree = renderer
    .create(<SignIn errorMessage={`Error`} isEmailValid={true} login={() => {}} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
