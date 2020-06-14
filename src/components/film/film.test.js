import React from "react";
import renderer from "react-test-renderer";
import Film from "./film.jsx";

const film = `Film name`;

it(`Render Film`, () => {
  const tree = renderer
    .create(<Film film={film}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
