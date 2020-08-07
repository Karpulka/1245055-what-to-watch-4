import * as React from "react";
import * as renderer from "react-test-renderer";
import {Filter} from "./filter";
import {StaticRouter} from "react-router-dom";
import {noop} from "../../utils";

const filters: Array<string> = [`All genres`, `Drama`, `Comwdy`];

it(`Render Filter`, () => {
  const tree = renderer
    .create(<StaticRouter>
      <Filter filters={filters} handleGenreChange={noop} genre={`Drama`} />
    </StaticRouter>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
