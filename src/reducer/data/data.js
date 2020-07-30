import {setNewObject} from "../../utils";
import {ActionCreator as FilmActionCreator} from "../film/film";

const initialState = {
  allFilms: [],
  promoFilm: {}
};

const ActionType = {
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_PROMOFILM: `LOAD_PROMOFILM`
};

const ActionCreator = {
  loadFilms: (films) => ({
    type: ActionType.LOAD_FILMS,
    payload: films
  }),

  loadPromoFilm: (promoFilm) => ({
    type: ActionType.LOAD_PROMOFILM,
    payload: promoFilm
  })
};

const Operation = {
  loadFilms: () => (dispatch, getState, api) => {
    return api.get(`/films`)
      .then((response) => {
        const films = response.data && response.data.length > 0 ? response.data.map((film) => prepareFilmData(film)) : null;
        dispatch(ActionCreator.loadFilms(films));
        dispatch(FilmActionCreator.setInitialFilms(films));
      });
  },

  loadPromoFilm: () => (dispatch, getState, api) => {
    return api.get(`/films/promo`)
      .then((response) => {
        const promoFilm = response.data ? prepareFilmData(response.data) : null;
        dispatch(ActionCreator.loadPromoFilm(promoFilm));
      });
  }
};

export const prepareFilmData = (film) => ({
  id: film.id,
  title: film.name,
  src: film.poster_image,
  background: film.background_image,
  genre: film.genre,
  year: film.released,
  video: film.preview_video_link,
  fullVideo: film.video_link,
  description: film.description,
  rating: film.rating,
  voiceCount: film.scores_count,
  director: film.director,
  actorList: film.starring,
  runtime: film.run_time,
  isFavorite: film.is_favorite
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return setNewObject(state, {
        allFilms: action.payload
      });
    case ActionType.LOAD_PROMOFILM:
      return setNewObject(state, {
        promoFilm: action.payload
      });
  }

  return state;
};

export {reducer, Operation, ActionType, ActionCreator};
