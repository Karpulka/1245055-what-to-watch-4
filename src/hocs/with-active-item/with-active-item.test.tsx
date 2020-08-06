import * as React from "react";
import renderer from "react-test-renderer";
import withActiveItem from "./with-active-item";

const MockComponent = () => {
  return <div/>;
};

it(`Render withReview`, () => {
  const ActiveItemWrapper = withActiveItem(MockComponent);

  const tree = renderer
    .create(<ActiveItemWrapper />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
