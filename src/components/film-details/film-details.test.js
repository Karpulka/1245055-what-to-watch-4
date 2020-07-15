import React from "react";
import renderer from "react-test-renderer";
import FilmDetails from "./film-details";

const details = {
  genre: `Drama`,
  year: 2012,
  director: `He's Director`,
  actorList: [`Actor 1`, `Actor 2`],
  runtime: 132
};

it(`Render FilmDetails`, () => {
  const tree = renderer
    .create(<FilmDetails details={details} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
