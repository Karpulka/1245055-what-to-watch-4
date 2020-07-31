import NameSpace from "../name-space";
import {createSelector} from "reselect";
import {DEFAULT_GENRE} from "../film/film";

const MAX_GENRES = 10;
const NAME_SPACE = NameSpace.DATA;

export const getAllFilms = (state) => {
  return state[NAME_SPACE].allFilms;
};

export const getPromoFilm = (state) => {
  return state[NAME_SPACE].promoFilm;
};

export const getComments = (state) => {
  return state[NAME_SPACE].comments;
};

export const getIsDisableComentForm = (state) => {
  return state[NAME_SPACE].isDisableCommentForm;
};

export const getFilters = createSelector(
    getAllFilms,
    (films) => {
      const filters = [DEFAULT_GENRE];
      films.forEach((film) => {
        const filmGenres = film.genre.split(`, `);
        filmGenres.forEach((genre) => {
          if (filters.indexOf(genre) === -1) {
            filters.push(genre);
          }
        });
      });

      return filters.slice(0, MAX_GENRES);
    }
);
