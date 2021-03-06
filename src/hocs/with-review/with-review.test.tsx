import * as React from "react";
import * as renderer from "react-test-renderer";
import withReview from "./with-review";

const MockComponent = () => {
  return <div/>;
};

it(`Render withReview`, () => {
  const ReviewWrapper = withReview(MockComponent);

  const tree = renderer
    .create(<ReviewWrapper />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
