import * as React from "react";
import Tabs from "../tabs/tabs";
import FilmsList from "../films-list/films-list";
import withFilmsList from "../../hocs/with-films-list/with-films-list";
import withActiveItem from "../../hocs/with-active-item/with-active-item";
import Footer from "../footer/footer";
import {PageType} from "../app/app";
import HeaderWrapper from "../header-wrapper/header-wrapper";
import {getAuthorizationStatus} from "../../reducer/user/selectors";
import {connect} from "react-redux";
import {AuthorizationStatus} from "../../reducer/user/user";
import {getAllFilms} from "../../reducer/data/selectors";
import {Link} from "react-router-dom";
import {Film} from "../../types";

const LIKE_FILMS_COUNT = 4;

interface Props {
  film: Film;
  allFilms: Array<Film>;
  authorizationStatus: string;
  onFilmClick: () => void;
  onChangeFavorite: (id: number, status: number) => void;
}

class FilmDetail extends React.PureComponent<Props, {}> {
  render() {
    const {film, allFilms, authorizationStatus, onFilmClick, onChangeFavorite} = this.props;
    const {id, title, src, background, genre, year, rating, voiceCount, description, director, actorList, runtime, isFavorite} = film;
    const likeFilms = this._getLikeFilms(allFilms, genre, id);
    const overview = {rating, voiceCount, description, director, actorList};
    const details = {director, actorList, runtime, genre, year};
    const FilmsListComponent = withFilmsList(FilmsList);
    const TabsComponent = withActiveItem(Tabs);

    return <React.Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={background} alt={title}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <HeaderWrapper pageType={PageType.MOVIE}/>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{year}</span>
              </p>

              <div className="movie-card__buttons">
                <Link to={`/films/${id}/player`} className="btn btn--play movie-card__button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>
                <button className="btn btn--list movie-card__button" type="button" onClick={(evt) => {
                  evt.preventDefault();
                  const status = isFavorite ? 0 : 1;
                  onChangeFavorite(id, status);
                }}>
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    {isFavorite ? <use xlinkHref="#in-list"></use> : <use xlinkHref="#add"></use>}
                  </svg>
                  <span>My list</span>
                </button>
                {authorizationStatus === AuthorizationStatus.AUTH ?
                  <Link to={`/films/${id}/review`} className="btn movie-card__button">Add review</Link> : ``}
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={src} alt={title} width="218" height="327"/>
            </div>

            <div className="movie-card__desc">
              <TabsComponent overview={overview} details={details} filmID={id}/>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        {likeFilms && likeFilms.length > 0 ? <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmsListComponent films={likeFilms} onFilmClick={onFilmClick}/>
        </section> : ``}
        <Footer/>
      </div>
    </React.Fragment>;
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

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  allFilms: getAllFilms(state)
});

export {FilmDetail};
export default connect(mapStateToProps)(FilmDetail);
