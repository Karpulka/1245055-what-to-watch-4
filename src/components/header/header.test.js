import React from "react";
import renderer from "react-test-renderer";
import Header from "./header";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import NameSpace from "../../reducer/name-space";

const mockStore = configureStore([]);

it(`Render Header Movie isAuth`, () => {
  const store = mockStore({
    [NameSpace.USER]: {
      authorizationStatus: `AUTH`
    }
  });

  const tree = renderer
    .create(<Provider store={store}><Header pageType={`MOVIE`}/></Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Render Header Movie NoIsAuth`, () => {
  const store = mockStore({
    [NameSpace.USER]: {
      authorizationStatus: `NO_AUTH`
    }
  });

  const tree = renderer
    .create(<Provider store={store}><Header pageType={`MOVIE`}/></Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Render Header Sign In NoIsAuth`, () => {
  const store = mockStore({
    [NameSpace.USER]: {
      authorizationStatus: `NO_AUTH`
    }
  });

  const tree = renderer
    .create(<Provider store={store}><Header pageType={`AUTH`}/></Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Render Header Sign In Auth`, () => {
  const store = mockStore({
    [NameSpace.USER]: {
      authorizationStatus: `AUTH`
    }
  });

  const tree = renderer
    .create(<Provider store={store}><Header pageType={`AUTH`}/></Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
