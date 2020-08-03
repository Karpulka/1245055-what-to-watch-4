import React, {PureComponent} from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";
import FilmDetail from "../film-detail/film-detail.jsx";
import {Router, Route, Switch, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import withVideoPlayer from "../../hocs/with-video-player/with-video-player";
import FullVideoPlayer from "../full-video-player/full-video-player.jsx";
import {getFilms} from "../../reducer/film/selectors";
import {getPromoFilm, getAllFilms} from "../../reducer/data/selectors";
import {getGenre} from "../../reducer/film/selectors";
import SignIn from "../sign-in/sign-in.jsx";
import {getAuthorizationStatus} from "../../reducer/user/selectors";
import {AuthorizationStatus} from "../../reducer/user/user";
import history from "../../history";
import MyList from "../mylist/mylist.jsx";
import {Operation} from "../../reducer/data/data";

const LIKE_FILMS_COUNT = 4;
const FullVideoPlayerComponent = withVideoPlayer(FullVideoPlayer);

const PageType = {
  AUTH: `AUTH`,
  ADD_REVIEW: `ADD_REVIEW`,
  MOVIE: `MOVIE`
};

class App extends PureComponent {
  render() {
    const {films, promoFilm, isAuth} = this.props;

    return <Router history={history}>
      <Switch>
        <Route exact path="/">
          {films && Object.keys(promoFilm).length > 0 ? this._renderFilmPage() : ``}
        </Route>
        <Route exact path="/login" render={() => {
          return isAuth === AuthorizationStatus.NO_AUTH ? <SignIn /> : <Redirect to="/" />;
        }}>
        </Route>
        <Route exact path="/mylist" component={MyList} />
      </Switch>
    </Router>;
  }

  _renderFilmPage() {
    const {films, promoFilm, onItemClick, activeItem: selectedFilm, isShowFilm, onPlayButtonClick, onExitButtonClick, handleChangeFavorite} = this.props;

    if (isShowFilm) {
      const showingFilm = selectedFilm || promoFilm;
      return <FullVideoPlayerComponent
        src={showingFilm.video}
        poster={showingFilm.src}
        title={showingFilm.title}
        isStartPlaying={true}
        onExitButtonClick={onExitButtonClick}
        runtime={showingFilm.runtime}
      />;
    }

    if (selectedFilm) {
      return <FilmDetail
        film={selectedFilm}
        likeFilms={this._getLikeFilms(films, selectedFilm.genre, selectedFilm.id)}
        onPlayButtonClick={onPlayButtonClick}
        onFilmClick={onItemClick}/>;
    }

    if (Object.keys(promoFilm).length > 0) {
      return <Main
        promoFilm={promoFilm}
        films={films}
        onPlayButtonClick={onPlayButtonClick}
        onFilmClick={onItemClick}
        onChangeFavorite={handleChangeFavorite}
      />;
    }

    return null;
  }

  _getLikeFilms(films, genre, filmID) {
    const {allFilms} = this.props;
    const genres = genre.split(`, `);

    const sortedFilms = allFilms.filter((film) => {
      const currentGenres = film.genre.split(`, `);

      let isCoincidence = false;
      genres.forEach((likeGenre) => {
        if (currentGenres.indexOf(likeGenre) > -1 && film.id !== filmID) {
          isCoincidence = true;
        }
      });

      return isCoincidence;
    });

    return sortedFilms.slice(0, LIKE_FILMS_COUNT);
  }
}

App.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    background: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    voiceCount: PropTypes.number.isRequired,
    director: PropTypes.string.isRequired,
    actorList: PropTypes.arrayOf(PropTypes.string).isRequired,
    runtime: PropTypes.number.isRequired,
    video: PropTypes.string.isRequired
  })),
  allFilms: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    background: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    voiceCount: PropTypes.number.isRequired,
    director: PropTypes.string.isRequired,
    actorList: PropTypes.arrayOf(PropTypes.string).isRequired,
    runtime: PropTypes.number.isRequired,
    video: PropTypes.string.isRequired
  })),
  promoFilm: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    src: PropTypes.string,
    background: PropTypes.string,
    genre: PropTypes.string,
    year: PropTypes.number,
    description: PropTypes.string,
    rating: PropTypes.number,
    voiceCount: PropTypes.number,
    director: PropTypes.string,
    actorList: PropTypes.arrayOf(PropTypes.string),
    runtime: PropTypes.number,
    video: PropTypes.string
  }),
  onItemClick: PropTypes.func.isRequired,
  onExitButtonClick: PropTypes.func.isRequired,
  handleChangeFavorite: PropTypes.func.isRequired,
  isShowFilm: PropTypes.bool.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
  activeItem: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    background: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    voiceCount: PropTypes.number.isRequired,
    director: PropTypes.string.isRequired,
    actorList: PropTypes.arrayOf(PropTypes.string).isRequired,
    runtime: PropTypes.number.isRequired,
    video: PropTypes.string.isRequired
  }),
  genre: PropTypes.string.isRequired,
  isAuth: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  genre: getGenre(state),
  films: getFilms(state),
  promoFilm: getPromoFilm(state),
  allFilms: getAllFilms(state),
  isAuth: getAuthorizationStatus(state)
});

const mapDispatchToProps = (dispatch) => ({
  handleChangeFavorite: (filmID, status) => {
    dispatch(Operation.changeFavorite(filmID, status));
  }
});

export {App, PageType};
export default connect(mapStateToProps, mapDispatchToProps)(App);
