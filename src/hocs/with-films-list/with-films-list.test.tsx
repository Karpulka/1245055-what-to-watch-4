import * as React from "react";
import renderer from "react-test-renderer";
import withFilmsList from "./with-films-list";

const MockComponent = () => {
  return <div/>;
};

it(`Render withReview`, () => {
  const FilmListWrapper = withFilmsList(MockComponent);

  const tree = renderer
    .create(<FilmListWrapper />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
