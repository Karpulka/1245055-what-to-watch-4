import NameSpace from "../name-space";

const NAME_SPACE = NameSpace.USER;

export const getAuthorizationStatus = (state) => {
  return state[NAME_SPACE].authorizationStatus;
};

export const getErrorMessage = (state) => {
  return state[NAME_SPACE].errorMessage;
};

export const getIsEmailValid = (state) => {
  return state[NAME_SPACE].isEmailValid;
};
