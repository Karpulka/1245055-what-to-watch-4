import films from "./mocks/films";
import {setNewObject} from "./utils";

const getFilters = (allFilms) => {
  const filters = [`All genres`];

  allFilms.forEach((film) => {
    const filmGenres = film.genre.split(`, `);
    filmGenres.forEach((genre) => {
      if (filters.indexOf(genre) === -1) {
        filters.push(genre);
      }
    });
  });

  return filters;
};

const promoFilm = films[0];

const initialState = {
  genre: `All genres`,
  films,
  allFilms: films,
  filters: getFilters(films),
  promoFilm
};

const ActionTypes = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  GET_FILM_BY_GENRE: `GET_FILM_BY_GENRE`
};

export const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionTypes.CHANGE_GENRE,
    payload: genre
  }),

  getFilmByGenre: (genre) => ({
    type: ActionTypes.GET_FILM_BY_GENRE,
    payload: genre
  })
};

const filteredFilms = (genre) => {
  if (genre !== initialState.genre) {
    const genres = genre.split(`, `);

    return initialState.films.filter((film) => {
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

  return initialState.films;
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CHANGE_GENRE:
      return setNewObject(state, {genre: action.payload});
    case ActionTypes.GET_FILM_BY_GENRE:
      return setNewObject(state, {films: filteredFilms(action.payload)});
    default:
      return state;
  }
};
