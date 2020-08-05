import * as React from "react";
import renderer from "react-test-renderer";
import Breadcrumbs from "./breadcrumbs";
import {StaticRouter} from "react-router-dom";

it(`Render breadcrumbs`, () => {
  const tree = renderer
    .create(<StaticRouter>
      <Breadcrumbs id={1} title={`Test title`}/>
    </StaticRouter>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
