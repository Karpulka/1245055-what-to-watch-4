import * as React from "react";
import * as renderer from "react-test-renderer";
import Review from "./review";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import NameSpace from "../../reducer/name-space";
import {AuthorizationStatus} from "../../reducer/user/user";
import {StaticRouter} from "react-router-dom";

const mockStore = configureStore([]);

const film = {
  id: 2,
  title: `Test film`,
  background: `/some/bg.jpg`,
  src: `/some/poster.jpg`,
};

it(`Render Review Component is Auth`, () => {
  const store = mockStore({
    [NameSpace.DATA]: {
      isDisableCommentForm: false,
      errorText: ``
    },
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.AUTH
    }
  });

  const {title, background, src, id} = film;

  const tree = renderer
    .create(<Provider store={store}>
      <StaticRouter>
        <Review
          title={title}
          background={background}
          src={src}
          id={id}
          isDisableSubmit={true}
          onSubmitReview={() => {}}
          onChangeText={() => {}}
          isDisableForm={false}/>
      </StaticRouter>
    </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Render Review Component is No Auth`, () => {
  const store = mockStore({
    [NameSpace.DATA]: {
      isDisableCommentForm: false,
      errorText: ``
    },
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.NO_AUTH
    }
  });

  const tree = renderer
    .create(<Provider store={store}>
      <StaticRouter>
        <Review
          title={film.title}
          background={film.background}
          src={film.src}
          id={film.id}
          isDisableSubmit={true}
          onChangeText={() => {}}
          onSubmitReview={() => {}}
          isDisableForm={false}/>
      </StaticRouter>
    </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
