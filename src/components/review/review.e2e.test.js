import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Review from "./review";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import NameSpace from "../../reducer/name-space";
import {AuthorizationStatus} from "../../reducer/user/user";
import {StaticRouter} from "react-router-dom";

const mockStore = configureStore([]);

Enzyme.configure({
  adapter: new Adapter()
});

const film = {
  id: 2,
  title: `Test film`,
  background: `/some/bg.jpg`,
  src: `/some/poster.jpg`,
};

it(`Test change text`, () => {
  const handleChangeText = jest.fn();
  const {title, background, src, id} = film;

  const store = mockStore({
    [NameSpace.DATA]: {
      isDisableCommentForm: false,
      errorText: ``
    },
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.AUTH
    }
  });

  store.dispatch = jest.fn();

  const review = mount(<Provider store={store}>
    <StaticRouter>
      <Review
        title={title}
        background={background}
        src={src}
        id={id}
        isDisableSubmit={false}
        onChangeText={handleChangeText}
        isDisableForm={false}/>
    </StaticRouter>
  </Provider>
  );

  const textarea = review.find(`textarea`);
  textarea.simulate(`change`, {
    preventDefault: () => {},
    currentTarget: {
      value: `12345`
    }
  });
  expect(handleChangeText.mock.calls.length).toBe(1);
});
