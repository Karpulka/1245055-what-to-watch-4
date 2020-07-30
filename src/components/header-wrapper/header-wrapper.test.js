import React from "react";
import renderer from "react-test-renderer";
import HeaderWrapper from "./header-wrapper";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import NameSpace from "../../reducer/name-space";

const mockStore = configureStore([]);

it(`Render HeaderWrapper Movie isAuth`, () => {
  const store = mockStore({
    [NameSpace.USER]: {
      authorizationStatus: `AUTH`
    }
  });

  const tree = renderer
    .create(<Provider store={store}><HeaderWrapper pageType={`MOVIE`} /></Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Render HeaderWrapper Movie No Auth`, () => {
  const store = mockStore({
    [NameSpace.USER]: {
      authorizationStatus: `NO_AUTH`
    }
  });

  const tree = renderer
    .create(<Provider store={store}><HeaderWrapper pageType={`MOVIE`} /></Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Render HeaderWrapper Auth isAuth`, () => {
  const store = mockStore({
    [NameSpace.USER]: {
      authorizationStatus: `AUTH`
    }
  });

  const tree = renderer
    .create(<Provider store={store}><HeaderWrapper pageType={`AUTH`} /></Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Render HeaderWrapper Auth No Auth`, () => {
  const store = mockStore({
    [NameSpace.USER]: {
      authorizationStatus: `NO_AUTH`
    }
  });

  const tree = renderer
    .create(<Provider store={store}><HeaderWrapper pageType={`AUTH`} /></Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
