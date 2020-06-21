import React from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";
import FilmDetail from "../film-detail/film-detail.jsx";
import {BrowserRouter, Route, Switch} from "react-router-dom";

const App = (props) => {
  const {settings: {promoFilm: promoFilmSettings, films}} = props;

  return <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Main
          promoFilmTitle={promoFilmSettings.title}
          promoFilmGenre={promoFilmSettings.genre}
          promoFilmYear={promoFilmSettings.year}
          films={films}
        />
      </Route>
      <Route exact path="/film-detail">
        <FilmDetail/>
      </Route>
    </Switch>
  </BrowserRouter>;
};

App.propTypes = {
  settings: PropTypes.shape({
    promoFilm: PropTypes.shape({
      title: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      year: PropTypes.number.isRequired
    }).isRequired,
    films: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired
    }))
  }).isRequired
};

export default App;
