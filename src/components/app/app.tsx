import * as React from "react";
import Main from "../main/main";
import FilmDetail from "../film-detail/film-detail";
import {Route, Switch, Redirect, BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";
import withVideoPlayer from "../../hocs/with-video-player/with-video-player";
import FullVideoPlayer from "../full-video-player/full-video-player";
import {getFilms} from "../../reducer/film/selectors";
import {getAllFilms, getPromoFilm} from "../../reducer/data/selectors";
import {getGenre} from "../../reducer/film/selectors";
import SignIn from "../sign-in/sign-in";
import {getAuthorizationStatus} from "../../reducer/user/selectors";
import {AuthorizationStatus} from "../../reducer/user/user";
import MyList from "../mylist/mylist";
import {Operation} from "../../reducer/data/data";
import withReview from "../../hocs/with-review/with-review";
import Review from "../review/review";
import RedirectToAuth from "../redirect-to-auth/redirect-to-auth";
import {Film} from "../../types";

const FullVideoPlayerComponent = withVideoPlayer(FullVideoPlayer);
const AddReviewComponent = withReview(Review);

const PageType = {
  AUTH: `AUTH`,
  ADD_REVIEW: `ADD_REVIEW`,
  MOVIE: `MOVIE`
};

interface Props {
  films: Array<Film>,
  runtime?: number,
  video?: string,
  allFilms: Array<Film>,
  promoFilm: Film,
  onItemClick: () => void,
  handleChangeFavorite: () => void,
  activeItem?: Array<Film>,
  genre: string,
  isAuth: string
}

class App extends React.PureComponent<Props, {}> {
  constructor(props) {
    super(props);

    this._getFilmByID = this._getFilmByID.bind(this);
  }
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
          if (film) {
            return <FilmDetail
              film={film}
              onFilmClick={(id) => props.history.push(`/films/${id}`)}
              onChangeFavorite={handleChangeFavorite}
            />;
          }
          return null;
        }}/>
        <Route exact path="/films/:id/player" render={(props) => {
          const film = this._getFilmByID(parseInt(props.match.params.id, 10));
          if (film) {
            const {fullVideo, src, title, runtime} = film;
            return <FullVideoPlayerComponent
              src={fullVideo}
              poster={src}
              title={title}
              isStartPlaying={true}
              onExitButtonClick={props.history.goBack}
              runtime={runtime}
            />;
          }
          return null;
        }} />
        <Route exact path="/films/:id/review" render={(props) => {
          const film = this._getFilmByID(parseInt(props.match.params.id, 10));
          if (film) {
            const {id, background, title, src} = film;
            return <RedirectToAuth><AddReviewComponent
              id={id}
              background={background}
              src={src}
              title={title}
              onSubmitReview={props.history.goBack}
            /></RedirectToAuth>;
          }
          return null;
        }}/>
        <Route exact path="/mylist" render={(props) => <RedirectToAuth><MyList onFilmClick={(id) => props.history.push(`/films/${id}`)}/></RedirectToAuth>} />
        <Route exact path="/login" render={() => {
          return isAuth === AuthorizationStatus.NO_AUTH ? <SignIn /> : <Redirect to="/" />;
        }} />
      </Switch>
    </BrowserRouter>;
  }

  _getFilmByID(id) {
    const {allFilms} = this.props;
    const index = allFilms.findIndex((film) => film.id === id);

    return allFilms[index];
  }
}

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
