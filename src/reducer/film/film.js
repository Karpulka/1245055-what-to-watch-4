import {setNewObject} from "../../utils";

const DEFAULT_FILMS_COUNT = 8;
export const DEFAULT_GENRE = `All genres`;

const initialState = {
  genre: DEFAULT_GENRE,
  films: [],
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

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return setNewObject(state, {genre: action.payload, showingFilms: DEFAULT_FILMS_COUNT});

    case ActionType.GET_FILM_BY_GENRE:
      return setNewObject(state, {films: action.payload, showingFilms: DEFAULT_FILMS_COUNT});

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
