import React from "react";
import renderer from "react-test-renderer";
import TabsInner from "./tabs-inner";

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

it(`Render TabsInner`, () => {
  const tree = renderer
    .create(<TabsInner overview={overview} details={details} filmID={1} isDetails={false} isReviews={true} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
