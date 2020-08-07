import * as React from "react";
import * as renderer from "react-test-renderer";
import {SignIn} from "./sign-in";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import NameSpace from "../../reducer/name-space";
import {StaticRouter} from "react-router-dom";
import {noop} from "../../utils";
import {AuthorizationStatus} from "../../reducer/user/user";

const mockStore = configureStore([]);

it(`Render SignIn Start`, () => {
  const store = mockStore({
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.NO_AUTH
    }
  });

  const tree = renderer
    .create(<Provider store={store}>
      <StaticRouter>
        <SignIn errorMessage={``} isEndLoadData={true} authorizationStatus={AuthorizationStatus.NO_AUTH} isEmailValid={true} login={noop} />
      </StaticRouter>
    </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Render SignIn Email No Valid`, () => {
  const store = mockStore({
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.NO_AUTH
    }
  });

  const tree = renderer
    .create(<Provider store={store}>
      <StaticRouter>
        <SignIn errorMessage={`Error`} authorizationStatus={AuthorizationStatus.NO_AUTH} isEndLoadData={true} isEmailValid={false} login={noop} />
      </StaticRouter>
    </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Render SignIn incorrect data`, () => {
  const store = mockStore({
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.NO_AUTH
    }
  });

  const tree = renderer
    .create(<Provider store={store}>
      <StaticRouter>
        <SignIn errorMessage={`Error`} isEndLoadData={true} authorizationStatus={AuthorizationStatus.NO_AUTH} isEmailValid={true} login={noop} />
      </StaticRouter>
    </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
