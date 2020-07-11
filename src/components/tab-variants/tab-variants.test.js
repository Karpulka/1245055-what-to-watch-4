import React from "react";
import renderer from "react-test-renderer";
import TabVariants from "./tab-variants";

const title = `This's film title`;
const active = true;

it(`Render TabVariants`, () => {
  const tree = renderer
    .create(<TabVariants title={title} active={active} onTabClick={() => {}} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
