import * as React from "react";
import * as renderer from "react-test-renderer";
import ReviewItem from "./review-item";
import {Review} from "../../types";

const review: Review = {
  id: 1,
  user: `Kate Muir`,
  rating: 7.1,
  comment: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
  date: `2019-05-08T14:13:56.569Z`
};

it(`Render Review`, () => {
  const tree = renderer
    .create(<ReviewItem review={review} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
