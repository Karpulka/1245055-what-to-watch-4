import NameSpace from "../name-space";

const NAME_SPACE = NameSpace.FILM;

export const getGenre = (state) => {
  return state[NAME_SPACE].genre;
};

export const getFilms = (state) => {
  return state[NAME_SPACE].films;
};

export const getFilters = (state) => {
  return state[NAME_SPACE].filters;
};

export const getShowingFilms = (state) => {
  return state[NAME_SPACE].showingFilms;
};
