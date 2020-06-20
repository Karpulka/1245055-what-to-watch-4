import React from "react";
import renderer from "react-test-renderer";
import Film from "./film.jsx";

const film = {
  title: `Film name`,
  src: `111`
};

it(`Render Film`, () => {
  const tree = renderer
    .create(<Film film={film} onFilmTitleClick={() => {}}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
