import React from "react";
import renderer from "react-test-renderer";
import {HeaderMovie} from "./header-movie";
import {StaticRouter} from "react-router-dom";

it(`Render HeaderMovie no Auth`, () => {
  const tree = renderer
    .create(<StaticRouter><HeaderMovie auth={`NO_AUTH`} /></StaticRouter>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Render HeaderMovie Auth`, () => {
  const tree = renderer
    .create(<StaticRouter><HeaderMovie auth={`AUTH`} /></StaticRouter>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
