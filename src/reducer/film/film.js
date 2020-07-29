import {setNewObject} from "../../utils";

const MAX_GENRES = 10;
const DEFAULT_FILMS_COUNT = 8;

const initialState = {
  genre: `All genres`,
  films: [],
  filters: [],
  showingFilms: DEFAULT_FILMS_COUNT
};

export const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  GET_FILM_BY_GENRE: `GET_FILM_BY_GENRE`,
  SHOW_MORE: `SHOW_MORE`,
  SET_FILMS: `SET_FILMS`
};

export const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre
  }),

  getFilmByGenre: (genre) => ({
    type: ActionType.GET_FILM_BY_GENRE,
    payload: genre
  }),

  setInitialFilms: (films) => ({
    type: ActionType.SET_FILMS,
    payload: films
  }),

  handleShowMoreClick: () => ({
    type: ActionType.SHOW_MORE,
    payload: DEFAULT_FILMS_COUNT
  })
};

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

  return filters.slice(0, MAX_GENRES);
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
    case ActionType.CHANGE_GENRE:
      return setNewObject(state, {genre: action.payload, showingFilms: DEFAULT_FILMS_COUNT});

    case ActionType.GET_FILM_BY_GENRE:
      const films = filteredFilms(action.payload);
      return setNewObject(state, {films, filters: getFilters(films), showingFilms: DEFAULT_FILMS_COUNT});

    case ActionType.SHOW_MORE:
      let showingFilms = state.showingFilms + DEFAULT_FILMS_COUNT;
      if (showingFilms > state.films.length) {
        showingFilms = state.films.length;
      }

      return setNewObject(state, {showingFilms});

    case ActionType.SET_FILMS:
      return setNewObject(state, {films: action.payload});

    default:
      return state;
  }
};