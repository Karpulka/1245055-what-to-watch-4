import React from "react";
import ReactDOM from "react-dom";
import {App} from "./components/app/app.jsx";

const init = () => {
  const promoFilmSettings = {
    title: `The Grand Budapest Hotel`,
    genre: `Drama`,
    year: 2014
  };

  ReactDOM.render(
      <App promoFilmSettings={promoFilmSettings}/>,
      document.querySelector(`#root`)
  );
};

init();
