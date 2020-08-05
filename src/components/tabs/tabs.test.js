import * as React from "react";
import renderer from "react-test-renderer";
import Tabs from "./tabs";
import {StaticRouter} from "react-router-dom";

const overview = {
  description: `This is Description. TCHK.`,
  rating: 8.5,
  voiceCount: 214,
  director: `And he's Director`,
  actorList: [`Actor`, `Actor`, `Actor`]
};

const details = {
  genre: `Drama`,
  year: 2012,
  director: `He's Director`,
  actorList: [`Actor 1`, `Actor 2`],
  runtime: 132
};

it(`Render Tabs`, () => {
  const activeItem = {
    title: `Overview`,
    value: overview
  };

  const tree = renderer
    .create(<StaticRouter><Tabs
      overview={overview}
      details={details}
      filmID={0}
      activeItem={activeItem}
      onItemClick={() => {}}/>
    </StaticRouter>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
