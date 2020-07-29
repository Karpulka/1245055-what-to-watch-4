import React from "react";
import renderer from "react-test-renderer";
import {Filter} from "./filter";

const filters = [`All genres`, `Drama`, `Comwdy`];

it(`Render Filter`, () => {
  const tree = renderer
    .create(<Filter filters={filters} handleGenreChange={() => {}} genre={`Drama`} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
