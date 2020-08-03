import React from "react";
import renderer from "react-test-renderer";
import {FilmReviews} from "./film-reviews";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import NameSpace from "../../reducer/name-space";

const mockStore = configureStore([]);

const comments = [
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

it(`Render FilmReviews`, () => {
  const store = mockStore({
    [NameSpace.DATA]: {
      comments
    }
  });

  const tree = renderer
    .create(<Provider store={store}><FilmReviews filmID={1} setComments={() => {}}/></Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
