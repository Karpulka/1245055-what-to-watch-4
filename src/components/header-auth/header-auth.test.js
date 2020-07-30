import React from "react";
import renderer from "react-test-renderer";
import HeaderAuth from "./header-auth";

it(`Render HeaderAuth`, () => {
  const tree = renderer
    .create(<HeaderAuth />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
