import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withReview from "./with-review";
import PropTypes from "prop-types";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import NameSpace from "../../reducer/name-space";

Enzyme.configure({
  adapter: new Adapter()
});

const mockStore = configureStore([]);

const MockComponent = (props) => {
  return <div>{props.children}</div>;
};

MockComponent.propTypes = {
  children: PropTypes.element.isRequired
};

const MockComponentWrapped = withReview(MockComponent);

it(`Test change textarea ,length < 50 simbols`, () => {
  const store = mockStore({
    [NameSpace.DATA]: {
      isDisableCommentForm: false,
      errorText: ``
    }
  });

  store.dispatch = jest.fn();

  const changeEvent = {
    preventDefault: () => {},
    currentTarget: {
      value: `test`
    }
  };

  const review = mount(<Provider store={store}>
    <MockComponentWrapped id={2}/>
  </Provider>);

  const textarea = review.find(`textarea`);
  textarea.simulate(`change`, changeEvent);

  expect(review.state.isDisableSubmit).toBe(true);
});
