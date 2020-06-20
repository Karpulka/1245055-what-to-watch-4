import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import films from "./mocks/films";

const init = () => {
  const promoFilm = {
    title: `The Grand Budapest Hotel`,
    genre: `Drama`,
    year: 2014
  };

  const settings = {
    promoFilm,
    films
  };

  ReactDOM.render(
      <App settings={settings}/>,
      document.querySelector(`#root`)
  );
};

init();
