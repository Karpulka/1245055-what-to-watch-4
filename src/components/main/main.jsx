import React from "react";
import FilmsList from "../films-list/films-list.jsx";
import PropTypes from "prop-types";
import withFilmsList from "../../hocs/with-films-list/with-films-list";
import Filter from "../filter/filter.jsx";
import ShowMore from "../show-more/show-more.jsx";
import Footer from "../footer/footer.jsx";
import {PageType} from "../app/app.jsx";
import HeaderWrapper from "../header-wrapper/header-wrapper.jsx";

const Main = (props) => {
  const {promoFilm, films, onFilmClick, onPlayButtonClick, onChangeFavorite} = props;
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
              <button className="btn btn--play movie-card__button" type="button" onClick={onPlayButtonClick}>
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>
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

Main.propTypes = {
  promoFilm: PropTypes.shape({
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
    video: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool.isRequired
  }),
  films: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired
  })),
  onFilmClick: PropTypes.func.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
  onChangeFavorite: PropTypes.func.isRequired
};

export default Main;
