import React from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";

const App = (props) => {
  const {settings: {promoFilm: promoFilmSettings, films}} = props;

  return <Main
    promoFilmTitle={promoFilmSettings.title}
    promoFilmGenre={promoFilmSettings.genre}
    promoFilmYear={promoFilmSettings.year}
    films={films}
  />;
};

App.propTypes = {
  settings: PropTypes.shape({
    promoFilm: PropTypes.shape({
      title: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      year: PropTypes.number.isRequired
    }).isRequired,
    films: PropTypes.arrayOf(PropTypes.string)
  }).isRequired
};

export default App;
