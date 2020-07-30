import {setNewObject} from "../../utils";

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`
};

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  errorMessage: ``,
  isEmailValid: true
};

const ActionType = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  SET_ERROR_TEXT: `SET_ERROR_TEXT`,
  SET_EMAIL_VALID: `SET_EMAIL_VALID`
};

const ErrorText = {
  EMAIL_IS_INVALID: `Please enter a valid email address`,
  TRY_AGAIN: `We can’t recognize this email and password combination. Please try again.`
};

const ActionCreator = {
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status
  }),

  setError: (message) => ({
    type: ActionType.SET_ERROR_TEXT,
    payload: message
  }),

  setEmailValidation: (message) => ({
    type: ActionType.SET_EMAIL_VALID,
    payload: message
  })
};

const Operation = {
  checkAuth: () => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then(() => {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      })
      .catch((err) => {
        throw err;
      });
  },

  login: (authData) => (dispatch, getState, api) => {
    const emailValid = authData.login.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);

    if (!authData.login || (emailValid && !authData.password)) {
      dispatch(ActionCreator.setError(ErrorText.TRY_AGAIN));
      return false;
    }

    if (!emailValid) {
      dispatch(ActionCreator.setEmailValidation(ErrorText.EMAIL_IS_INVALID));
      return false;
    }

    return api.post(`/login`, {
      email: authData.login,
      password: authData.password
    })
      .then(() => {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      })
      .catch(() => {
        dispatch(ActionCreator.setError(ErrorText.TRY_AGAIN));
      });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return setNewObject(state, {
        authorizationStatus: action.payload,
        isEmailValid: true,
        errorMessage: ``
      });

    case ActionType.SET_ERROR_TEXT:
      return setNewObject(state, {
        errorMessage: action.payload,
        isEmailValid: true
      });

    case ActionType.SET_EMAIL_VALID:
      return setNewObject(state, {
        errorMessage: action.payload,
        isEmailValid: false
      });
  }

  return state;
};

export {ActionCreator, ActionType, AuthorizationStatus, Operation, reducer};
