import NameSpace from "../name-space";

const NAME_SPACE = NameSpace.DATA;

export const getAllFilms = (state) => {
  return state[NAME_SPACE].allFilms;
};

export const getPromoFilm = (state) => {
  return state[NAME_SPACE].promoFilm;
};
