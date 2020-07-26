import React from "react";
import renderer from "react-test-renderer";
import TabVariants from "./tab-variants";

const tab = {
  title: `Overview`,
  value: {
    description: `This is Description. TCHK.`,
    rating: 8.5,
    voiceCount: 214,
    director: `And he's Director`,
    actorList: [`Actor`, `Actor`, `Actor`]
  }
};

it(`Render TabVariants No Active Tab`, () => {
  const tree = renderer
    .create(<TabVariants tab={tab} active={`Details`} onTabClick={() => {
    }}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Render TabVariants Active Tab`, () => {
  const tree = renderer
    .create(<TabVariants tab={tab} active={`Overview`} onTabClick={() => {
    }}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
