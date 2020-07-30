import React from "react";
import renderer from "react-test-renderer";
import {HeaderMovie} from "./header-movie";

it(`Render HeaderMovie no Auth`, () => {
  const tree = renderer
    .create(<HeaderMovie auth={`NO_AUTH`} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Render HeaderMovie Auth`, () => {
  const tree = renderer
    .create(<HeaderMovie auth={`AUTH`} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
