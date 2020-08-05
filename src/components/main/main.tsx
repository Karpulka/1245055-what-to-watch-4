import * as React from "react";
import FilmsList from "../films-list/films-list";
import withFilmsList from "../../hocs/with-films-list/with-films-list";
import Filter from "../filter/filter";
import ShowMore from "../show-more/show-more";
import Footer from "../footer/footer";
import {PageType} from "../app/app";
import HeaderWrapper from "../header-wrapper/header-wrapper";
import {Link} from "react-router-dom";
import {Film} from "../../types";

interface Props {
  promoFilm: Film,
  films: Array<Film>,
  onFilmClick: (callback: () => void) => void,
  onChangeFavorite: (id: number, status: number) => void
}

const Main: React.FunctionComponent<Props> = (props: Props) => {
  const {promoFilm, films, onFilmClick, onChangeFavorite} = props;
  const {background, title, src, genre, year, isFavorite, id} = promoFilm;
  const FilmsListComponent = withFilmsList(FilmsList);

  return <React.Fragment>
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src={background} alt={title}/>
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <HeaderWrapper pageType={PageType.MOVIE}/>

      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img src={src} alt={title} width="218" height="327"/>
          </div>

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
            </div>
          </div>
        </div>
      </div>
    </section>

    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <Filter />

        <FilmsListComponent films={films} onFilmClick={onFilmClick} />

        <ShowMore />
      </section>

      <Footer />
    </div>
  </React.Fragment>;
};

Main.defaultProps = {
  films: []
};

export default Main;
