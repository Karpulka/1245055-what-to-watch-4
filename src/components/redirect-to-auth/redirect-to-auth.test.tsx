import * as React from "react";
import * as renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import NameSpace from "../../reducer/name-space";
import {StaticRouter} from "react-router-dom";
import RedirectToAuth from "./redirect-to-auth";

const mockStore = configureStore([]);

it(`Render Redirect To Auth AUTH`, () => {
  const store = mockStore({
    [NameSpace.USER]: {
      authorizationStatus: `AUTH`
    }
  });

  const tree = renderer
    .create(<Provider store={store}>
      <StaticRouter>
        <RedirectToAuth>
          <div />
        </RedirectToAuth>
      </StaticRouter>
    </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Render Redirect To Auth NO_AUTH`, () => {
  const store = mockStore({
    [NameSpace.USER]: {
      authorizationStatus: `NO_AUTH`
    }
  });

  const tree = renderer
    .create(<Provider store={store}>
      <StaticRouter>
        <RedirectToAuth>
          <div />
        </RedirectToAuth>
      </StaticRouter>
    </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
