import * as React from "react";
import * as renderer from "react-test-renderer";
import {FilmReviews} from "./film-reviews";
import {Review} from "../../types";
import {noop} from "../../utils";

const comments: Array<Review> = [
  {
    id: 0,
    user: `Kate Muir`,
    rating: 8.9,
    comment: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
    date: `2019-05-08T14:13:56.569Z`
  },
  {
    id: 1,
    user: `Kate Muir`,
    rating: 7.5,
    comment: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
    date: `2019-05-08T14:13:56.569Z`
  },
  {
    id: 2,
    user: `Kate Muir`,
    rating: 9.1,
    comment: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
    date: `2019-05-08T14:13:56.569Z`
  }
];

const filmId = 1;

it(`Render FilmReviews`, () => {
  const tree = renderer
    .create(<FilmReviews filmID={filmId} comments={comments} setComments={noop}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
