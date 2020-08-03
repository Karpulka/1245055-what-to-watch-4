import React, {PureComponent} from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";
import FilmDetail from "../film-detail/film-detail.jsx";
import {Route, Switch, Redirect, BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";
import withVideoPlayer from "../../hocs/with-video-player/with-video-player";
import FullVideoPlayer from "../full-video-player/full-video-player.jsx";
import {getFilms} from "../../reducer/film/selectors";
import {getAllFilms, getPromoFilm} from "../../reducer/data/selectors";
import {getGenre} from "../../reducer/film/selectors";
import SignIn from "../sign-in/sign-in.jsx";
import {getAuthorizationStatus} from "../../reducer/user/selectors";
import {AuthorizationStatus} from "../../reducer/user/user";
import MyList from "../mylist/mylist.jsx";
import {Operation} from "../../reducer/data/data";
import withReview from "../../hocs/with-review/with-review";
import Review from "../review/review.jsx";

const FullVideoPlayerComponent = withVideoPlayer(FullVideoPlayer);
const AddReviewComponent = withReview(Review);

const PageType = {
  AUTH: `AUTH`,
  ADD_REVIEW: `ADD_REVIEW`,
  MOVIE: `MOVIE`
};

class App extends PureComponent {
  render() {
    const {isAuth, promoFilm, films, handleChangeFavorite} = this.props;

    return <BrowserRouter>
      <Switch>
        <Route exact path="/" render={(props) => {
          if (Object.keys(promoFilm).length > 0) {
            return <Main
              promoFilm={promoFilm}
              films={films}
              onFilmClick={(id) => props.history.push(`/films/${id}`)}
              onChangeFavorite={handleChangeFavorite}
            />;
          }
          return null;
        }}>
        </Route>
        <Route exact path="/films/:id" render={(props) => {
          const film = this._getFilmByID(parseInt(props.match.params.id, 10));
          return <FilmDetail
            film={film}
            onFilmClick={(id) => props.history.push(`/films/${id}`)}
          />;
        }}/>
        <Route exact path="/films/:id/player" render={(props) => {
          const film = this._getFilmByID(parseInt(props.match.params.id, 10));
          const {fullVideo, src, title, runtime} = film;
          return <FullVideoPlayerComponent
            src={fullVideo}
            poster={src}
            title={title}
            isStartPlaying={true}
            onExitButtonClick={props.history.goBack}
            runtime={runtime}
          />;
        }} />
        <Route exact path="/films/:id/review" render={(props) => {
          const film = this._getFilmByID(parseInt(props.match.params.id, 10));
          const {id, background, title, src} = film;
          return <AddReviewComponent
            id={id}
            background={background}
            src={src}
            title={title}
            onSubmitReview={props.history.goBack}
          />;
        }}/>
        <Route exact path="/login" render={() => {
          return isAuth === AuthorizationStatus.NO_AUTH ? <SignIn /> : <Redirect to="/" />;
        }}>
        </Route>
        <Route exact path="/mylist" component={MyList} />
      </Switch>
    </BrowserRouter>;
  }

  _getFilmByID(id) {
    const {allFilms} = this.props;
    const index = allFilms.findIndex((film) => film.id === id);

    return allFilms[index];
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
  handleChangeFavorite: PropTypes.func.isRequired,
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
  isAuth: getAuthorizationStatus(state),
  allFilms: getAllFilms(state)
});

const mapDispatchToProps = (dispatch) => ({
  handleChangeFavorite: (filmID, status) => {
    dispatch(Operation.changeFavorite(filmID, status));
  }
});

export {App, PageType};
export default connect(mapStateToProps, mapDispatchToProps)(App);
