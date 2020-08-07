import * as React from "react";
import * as renderer from "react-test-renderer";
import TabVariants from "./tab-variants";
import {StaticRouter} from "react-router-dom";
import {Tab} from "../../types";
import {noop} from "../../utils";

const tab: Tab = {
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
    .create(<StaticRouter>
      <TabVariants tab={tab} active={`Details`} onTabClick={noop}/>
    </StaticRouter>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Render TabVariants Active Tab`, () => {
  const tree = renderer
    .create(<StaticRouter>
      <TabVariants tab={tab} active={`Overview`} onTabClick={noop}/>
    </StaticRouter>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
