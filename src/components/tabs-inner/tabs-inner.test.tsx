import * as React from "react";
import * as renderer from "react-test-renderer";
import TabsInner from "./tabs-inner";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import NameSpace from "../../reducer/name-space";
import {Tab, Review} from "../../types";

const overview: Tab = {
  title: `Overview`,
  overview: {
    description: `This is Description. TCHK.`,
    rating: 8.5,
    voiceCount: 214,
    director: `And he's Director`,
    actorList: [`Actor`, `Actor`, `Actor`]
  }
};

const details: Tab = {
  title: `Details`,
  details: {
    genre: `Drama`,
    year: 2012,
    director: `He's Director`,
    actorList: [`Actor 1`, `Actor 2`],
    runtime: 132
  }
};

const reviews: Tab = {
  title: `Reviews`,
  id: 1
};

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

const mockStore = configureStore([]);

describe(`Render Tabs Variants`, () => {
  const store = mockStore({
    [NameSpace.DATA]: {
      comments
    }
  });

  it(`Render TabsInner Overview`, () => {
    const tree = renderer
      .create(<Provider store={store}>
        <TabsInner tabValue={overview}/>
      </Provider>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Render TabsInner Details`, () => {
    const tree = renderer
      .create(<Provider store={store}>
        <TabsInner tabValue={details}/>
      </Provider>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Render TabsInner Reviews`, () => {
    store.dispatch = jest.fn();

    const tree = renderer
      .create(<Provider store={store}>
        <TabsInner tabValue={reviews}/>
      </Provider>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
