import React from "react";
import {Main} from "../main/main.jsx";

export const App = (props) => {
  const {settings: {promoFilm: promoFilmSettings, films}} = props;

  return <Main
    promoFilmTitle={promoFilmSettings.title}
    promoFilmGenre={promoFilmSettings.genre}
    pormoFilmYear={promoFilmSettings.year}
    films={films}
  />;
};
