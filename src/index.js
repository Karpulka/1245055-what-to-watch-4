import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducer} from "./reducer";
import withApp from "./hocs/with-app/with-app";

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

const AppComponent = withApp(App);

const init = () => {
  ReactDOM.render(
      <Provider store={store}>
        <AppComponent />
      </Provider>,
      document.querySelector(`#root`)
  );
};

init();
