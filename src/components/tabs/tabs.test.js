import React from "react";
import renderer from "react-test-renderer";
import Tabs from "./tabs";

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
  const tree = renderer
    .create(<Tabs overview={overview} details={details} filmID={0} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});