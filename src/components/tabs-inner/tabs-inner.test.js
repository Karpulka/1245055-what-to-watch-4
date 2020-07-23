import React from "react";
import renderer from "react-test-renderer";
import TabsInner from "./tabs-inner";

const overview = {
  title: `Overview`,
  value: {
    description: `This is Description. TCHK.`,
    rating: 8.5,
    voiceCount: 214,
    director: `And he's Director`,
    actorList: [`Actor`, `Actor`, `Actor`]
  }
};

const details = {
  title: `Details`,
  value: {
    genre: `Drama`,
    year: 2012,
    director: `He's Director`,
    actorList: [`Actor 1`, `Actor 2`],
    runtime: 132
  }
};

const reviews = {
  title: `Reviews`,
  value: 1
};

describe(`Render Tabs Variants`, () => {
  it(`Render TabsInner Overview`, () => {
    const tree = renderer
      .create(<TabsInner tabValue={overview}/>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Render TabsInner Details`, () => {
    const tree = renderer
      .create(<TabsInner tabValue={details}/>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Render TabsInner Reviews`, () => {
    const tree = renderer
      .create(<TabsInner tabValue={reviews}/>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
