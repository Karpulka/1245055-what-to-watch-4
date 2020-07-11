import React from "react";
import renderer from "react-test-renderer";
import FilmReviews from "./film-reviews";

it(`Render FilmReviews`, () => {
  const tree = renderer
    .create(<FilmReviews filmID={1} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
