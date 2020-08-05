import * as React from "react";
import renderer from "react-test-renderer";
import Header from "./header";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import NameSpace from "../../reducer/name-space";
import {StaticRouter} from "react-router-dom";

const mockStore = configureStore([]);

it(`Render Header Movie isAuth`, () => {
  const store = mockStore({
    [NameSpace.USER]: {
      authorizationStatus: `AUTH`
    }
  });

  const tree = renderer
    .create(<Provider store={store}>
      <StaticRouter>
        <Header pageType={`MOVIE`}/>
      </StaticRouter>
    </Provider>)
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
    .create(<Provider store={store}>
      <StaticRouter>
        <Header pageType={`MOVIE`}/>
      </StaticRouter>
    </Provider>)
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
    .create(<Provider store={store}>
      <StaticRouter>
        <Header pageType={`AUTH`}/>
      </StaticRouter>
    </Provider>)
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
    .create(<Provider store={store}>
      <StaticRouter>
        <Header pageType={`AUTH`}/>
      </StaticRouter>
    </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Render Header Sign In WithTitle Auth`, () => {
  const store = mockStore({
    [NameSpace.USER]: {
      authorizationStatus: `AUTH`
    }
  });

  const tree = renderer
    .create(<Provider store={store}>
      <StaticRouter>
        <Header pageType={`AUTH`} pageTitle={`Page Name`}/>
      </StaticRouter>
    </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
