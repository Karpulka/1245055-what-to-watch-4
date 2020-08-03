import {setNewObject} from "../../utils";
import {ActionCreator as FilmActionCreator} from "../film/film";
import {prepareFilmData, prepareCommentDataForShow} from "../../prepare-data";
import NameSpace from "../name-space";

const initialState = {
  allFilms: [],
  promoFilm: {},
  comments: [],
  errorText: ``,
  isDisableCommentForm: false,
  favoriteFilms: []
};

const ERROR_TEXT = `Произошла ошибка отправки комментария. Попробуйте повторить отправку позже.`;

const ActionType = {
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_PROMOFILM: `LOAD_PROMOFILM`,
  LOAD_COMMENTS: `LOAD_COMMENTS`,
  ERROR_SEND_COMMENT: `ERROR_SEND_COMMENT`,
  SET_DISABLE_COMMENT_FORM: `SET_DISABLE_COMMENT_FORM`,
  SET_FAVORITE_FILMS: `SET_FAVORITE_FILMS`
};

const ActionCreator = {
  loadFilms: (films) => ({
    type: ActionType.LOAD_FILMS,
    payload: films
  }),

  loadPromoFilm: (promoFilm) => ({
    type: ActionType.LOAD_PROMOFILM,
    payload: promoFilm
  }),

  loadComments: (comments) => ({
    type: ActionType.LOAD_COMMENTS,
    payload: comments
  }),

  setErrorText: (text) => ({
    type: ActionType.ERROR_SEND_COMMENT,
    payload: text
  }),

  setDisableCommentForm: (isDisable) => ({
    type: ActionType.SET_DISABLE_COMMENT_FORM,
    payload: isDisable
  }),

  setFavoriteFilms: (films) => ({
    type: ActionType.SET_FAVORITE_FILMS,
    payload: films
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
  },

  loadComments: (filmID) => (dispatch, getState, api) => {
    return api.get(`/comments/${filmID}`)
      .then((response) => {
        const comments = response.data && response.data.length > 0 ? response.data.map((comment) => prepareCommentDataForShow(comment)) : [];
        dispatch(ActionCreator.loadComments(comments));
      });
  },

  sendComment: (filmID, comment) => (dispatch, getState, api) => {
    dispatch(ActionCreator.setDisableCommentForm(true));
    return api.post(`/comments/${filmID}`, comment)
      .then(() => {
        dispatch(ActionCreator.setErrorText(``));
        dispatch(ActionCreator.setDisableCommentForm(false));
      })
    .catch(() => {
      dispatch(ActionCreator.setErrorText(ERROR_TEXT));
      dispatch(ActionCreator.setDisableCommentForm(false));
    });
  },

  changeFavorite: (filmID, status) => (dispatch, getState, api) => {
    return api.post(`/favorite/${filmID}/${status}`)
      .then((response) => {
        const film = response.data ? prepareFilmData(response.data) : null;

        if (film) {
          const allFilms = getState()[NameSpace.DATA].allFilms;
          const isPromoFilm = filmID === getState()[NameSpace.DATA].promoFilm.id;
          const index = allFilms.findIndex((filmItem) => filmItem.id === filmID);
          const films = [].concat(allFilms.slice(0, index), film, allFilms.slice(index + 1));

          dispatch(ActionCreator.loadFilms(films));
          if (isPromoFilm) {
            dispatch(ActionCreator.loadPromoFilm(film));
          }
        }
      });
  },

  getFavoriteFilms: () => (dispatch, getState, api) => {
    return api.get(`/favorite`)
      .then((response) => {
        dispatch(ActionCreator.setFavoriteFilms(response.data));
      });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return setNewObject(state, {
        allFilms: action.payload
      });

    case ActionType.LOAD_COMMENTS:
      return setNewObject(state, {
        comments: action.payload
      });

    case ActionType.LOAD_PROMOFILM:
      return setNewObject(state, {
        promoFilm: action.payload
      });

    case ActionType.ERROR_SEND_COMMENT:
      return setNewObject(state, {
        errorText: action.payload
      });

    case ActionType.SET_DISABLE_COMMENT_FORM:
      return setNewObject(state, {
        isDisableCommentForm: action.payload
      });

    case ActionType.SET_FAVORITE_FILMS:
      return setNewObject(state, {
        favoriteFilms: action.payload
      });
  }

  return state;
};

export {reducer, Operation, ActionType, ActionCreator};
