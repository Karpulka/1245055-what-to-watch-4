import React from "react";
import renderer from "react-test-renderer";
import Footer from "./footer";
import {StaticRouter} from "react-router-dom";

it(`Render Footer`, () => {
  const tree = renderer
    .create(<StaticRouter><Footer /></StaticRouter>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
