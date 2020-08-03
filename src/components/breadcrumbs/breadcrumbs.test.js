import React from "react";
import renderer from "react-test-renderer";
import Breadcrumbs from "./breadcrumbs";

it(`Render breadcrumbs`, () => {
  const tree = renderer
    .create(<Breadcrumbs />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
