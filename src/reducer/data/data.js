import {setNewObject} from "../../utils";

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
        dispatch(ActionCreator.loadFilms(response.data));
      });
  },

  loadPromoFilm: () => (dispatch, getState, api) => {
    return api.get(`/films/promo`)
      .then((response) => {
        dispatch(ActionCreator.loadPromoFilm(response.data));
      });
  }
};

const prepareFilmData = (film) => ({
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
        allFilms: action.payload.map((film) => prepareFilmData(film))
      });
    case ActionType.LOAD_PROMOFILM:
      return setNewObject(state, {
        promoFilm: prepareFilmData(action.payload)
      });
  }

  return state;
};

export {reducer, Operation, ActionType, ActionCreator};
