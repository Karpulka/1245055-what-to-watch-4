import React from "react";
import renderer from "react-test-renderer";
import {Filter} from "./filter";
import {StaticRouter} from "react-router-dom";

const filters = [`All genres`, `Drama`, `Comwdy`];

it(`Render Filter`, () => {
  const tree = renderer
    .create(<StaticRouter>
      <Filter filters={filters} handleGenreChange={() => {}} genre={`Drama`} />
    </StaticRouter>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
