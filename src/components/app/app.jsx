import React from "react";
import {Main} from "../main/main.jsx";

export const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {promoFilmSettings} = props;
  // eslint-disable-next-line react/prop-types
  return <Main promoFilmTitle={promoFilmSettings.title} promoFilmGenre={promoFilmSettings.genre} pormoFilmYear={promoFilmSettings.year}/>;
};
