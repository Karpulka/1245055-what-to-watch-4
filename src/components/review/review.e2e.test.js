import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Review from "./review";

Enzyme.configure({
  adapter: new Adapter()
});

const film = {
  id: 2,
  title: `Test film`,
  background: `/some/bg.jpg`,
  src: `/some/poster.jpg`,
};

it(`Test submit button click`, () => {
  const handleSubmitButtonClick = jest.fn();
  const {title, background, src, id} = film;

  const review = shallow(
      <Review
        title={title}
        background={background}
        src={src}
        id={id}
        isDisableSubmit={false}
        onSubmitComment={handleSubmitButtonClick}
        onChangeRating={() => {}}
        isDisableForm={false}>
        <textarea>123456</textarea>
      </Review>
  );

  const submitButton = review.find(`button`);
  submitButton.simulate(`click`);
  expect(handleSubmitButtonClick.mock.calls.length).toBe(1);
});

it(`Test submit change rating`, () => {
  const handleChangeRating = jest.fn();
  const {title, background, src, id} = film;

  const review = shallow(
      <Review
        title={title}
        background={background}
        src={src}
        id={id}
        isDisableSubmit={false}
        onSubmitComment={() => {}}
        onChangeRating={handleChangeRating}
        isDisableForm={false}>
        <textarea>123456</textarea>
      </Review>
  );

  const rating = review.find(`input#star-1`);
  rating.simulate(`change`);
  expect(handleChangeRating.mock.calls.length).toBe(1);
});
