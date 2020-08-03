import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {createStore, applyMiddleware, compose} from "redux";
import {Provider} from "react-redux";
import reducer from "./reducer/reducer";
import {Operation as DataOperation} from "./reducer/data/data";
import {ActionCreator, AuthorizationStatus, Operation as UserOperation} from "./reducer/user/user";
import withActiveItem from "./hocs/with-active-item/with-active-item";
import thunk from "redux-thunk";
import {createApi} from "./api";

const api = createApi(() => {
  store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
});

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    )
);

store.dispatch(UserOperation.checkAuth());
store.dispatch(DataOperation.loadPromoFilm());
store.dispatch(DataOperation.loadFilms());

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
