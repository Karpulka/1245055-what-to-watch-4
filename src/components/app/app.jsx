import React, {PureComponent} from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";
import FilmDetail from "../film-detail/film-detail.jsx";
import {BrowserRouter, Route, Switch} from "react-router-dom";

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedFilm: null
    };

    this.handleFilmClick = this.handleFilmClick.bind(this);
  }

  render() {
    const {settings: {films}} = this.props;

    return <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {this._renderFilmPage()}
        </Route>
        <Route exact path="/film-detail">
          <FilmDetail {...films[1]}/>
        </Route>
      </Switch>
    </BrowserRouter>;
  }

  handleFilmClick(film) {
    this.setState({selectedFilm: film});
  }

  _renderFilmPage() {
    const {settings: {promoFilm: promoFilmSettings, films}} = this.props;
    const {selectedFilm} = this.state;

    if (selectedFilm) {
      return <FilmDetail {...selectedFilm}/>;
    }

    return <Main
      promoFilmTitle={promoFilmSettings.title}
      promoFilmGenre={promoFilmSettings.genre}
      promoFilmYear={promoFilmSettings.year}
      films={films}
      onFilmClick={this.handleFilmClick}
    />;
  }
}

App.propTypes = {
  settings: PropTypes.shape({
    promoFilm: PropTypes.shape({
      title: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      year: PropTypes.number.isRequired
    }).isRequired,
    films: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
      background: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      year: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      rating: PropTypes.string.isRequired,
      voiceCount: PropTypes.number.isRequired,
      director: PropTypes.string.isRequired,
      actorList: PropTypes.arrayOf(PropTypes.string).isRequired,
      runtime: PropTypes.number.isRequired
    }))
  }).isRequired
};

export default App;
