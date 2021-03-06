import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./components/app/app";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import reducer from "./reducer/reducer";
import {Operation as DataOperation} from "./reducer/data/data";
import {ActionCreator, AuthorizationStatus, Operation as UserOperation} from "./reducer/user/user";
import withActiveItem from "./hocs/with-active-item/with-active-item";
import thunk from "redux-thunk";
import {createApi} from "./api";
import {composeWithDevTools} from "redux-devtools-extension";

const api = createApi(() => {
  store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
});

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

store.dispatch(UserOperation.checkAuth());
store.dispatch(DataOperation.loadPromoFilm());
store.dispatch(DataOperation.loadFilms());
store.dispatch(DataOperation.getFavoriteFilms());

const AppComponent = withActiveItem(App);

const init = () => {
  ReactDOM.render(
      <Provider store={store}>
        <AppComponent />
      </Provider>,
      document.querySelector(`#root`)
  );
};

init();
