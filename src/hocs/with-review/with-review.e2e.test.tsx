import * as React from "react";
import {configure, mount} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import withReview from "./with-review";

configure({
  adapter: new Adapter()
});

const MockComponent = () => {
  return <div><textarea></textarea></div>;
};

const MockComponentWrapped = withReview(MockComponent);

it(`Test change state`, () => {
  const review = mount(<MockComponentWrapped/>);
  const reviewInstance = review.instance();

  expect(reviewInstance.state.isDisableSubmit).toBe(true);

  reviewInstance.setState({isDisableSubmit: false});
  expect(reviewInstance.state.isDisableSubmit).toBe(false);
});
