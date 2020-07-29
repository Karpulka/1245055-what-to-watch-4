import NameSpace from "../name-space";
import {createSelector} from "reselect";
import {getAllFilms} from "../data/selectors";
import {DEFAULT_GENRE} from "./film";

const NAME_SPACE = NameSpace.FILM;

export const getGenre = (state) => {
  return state[NAME_SPACE].genre;
};

export const getFilms = createSelector(
    getAllFilms,
    getGenre,
    (films, genre) => {
      if (genre !== DEFAULT_GENRE) {
        const genres = genre.split(`, `);
        return films.filter((film) => {
          const filmGenres = film.genre.split(`, `);
          let isGenre = false;

          filmGenres.forEach((filmGenre) => {
            if (genres.indexOf(filmGenre) > -1) {
              isGenre = true;
            }
          });

          return isGenre;
        });
      }

      return films;
    }
);

export const getShowingFilms = (state) => {
  return state[NAME_SPACE].showingFilms;
};
