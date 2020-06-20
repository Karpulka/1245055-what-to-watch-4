import React from "react";
import renderer from "react-test-renderer";
import FilmsList from "./films-list.jsx";

const films = [
  {
    title: `11`,
    src: `11`
  },
  {
    title: `22`,
    src: `22`
  },
  {
    title: `33`,
    src: `33`
  },
  {
    title: `44`,
    src: `44`
  },
];

it(`Render FilmsList`, () => {
  const tree = renderer
    .create(<FilmsList films={films}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
