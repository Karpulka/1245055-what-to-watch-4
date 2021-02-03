import {reducer, ActionCreator, ActionType, AuthorizationStatus} from "./user";

const errorText = `Message 1`;
const otherErrorText = `Message 2`;

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    errorMessage: ``,
    isEmailValid: true,
    isEndLoadData: false
  });
});

it(`Reducer should change authorizationStatus by a given value`, () => {
  expect(reducer({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    errorMessage: ``,
    isEmailValid: true,
    isEndLoadData: false
  }, {
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: AuthorizationStatus.AUTH,
  })).toEqual({
    authorizationStatus: AuthorizationStatus.AUTH,
    errorMessage: ``,
    isEmailValid: true,
    isEndLoadData: false
  });

  expect(reducer({
    authorizationStatus: AuthorizationStatus.AUTH,
    errorMessage: ``,
    isEmailValid: true,
    isEndLoadData: false
  }, {
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: AuthorizationStatus.NO_AUTH,
  })).toEqual({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    errorMessage: ``,
    isEmailValid: true,
    isEndLoadData: false
  });

  expect(reducer({
    authorizationStatus: AuthorizationStatus.AUTH,
    errorMessage: ``,
    isEmailValid: true,
    isEndLoadData: false
  }, {
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: AuthorizationStatus.AUTH,
  })).toEqual({
    authorizationStatus: AuthorizationStatus.AUTH,
    errorMessage: ``,
    isEmailValid: true,
    isEndLoadData: false
  });

  expect(reducer({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    errorMessage: ``,
    isEmailValid: true,
    isEndLoadData: false
  }, {
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: AuthorizationStatus.NO_AUTH,
  })).toEqual({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    errorMessage: ``,
    isEmailValid: true,
    isEndLoadData: false
  });

  expect(reducer({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    errorMessage: ``,
    isEmailValid: true,
    isEndLoadData: false
  }, {
    type: ActionType.SET_LOAD_DATA_FLAG,
    payload: true,
  })).toEqual({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    errorMessage: ``,
    isEmailValid: true,
    isEndLoadData: true
  });
});

it(`Reducer should change errorMessage`, () => {
  expect(reducer({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    errorMessage: ``,
    isEmailValid: true,
    isEndLoadData: false
  }, {
    type: ActionType.SET_ERROR_TEXT,
    payload: errorText
  })).toEqual({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    errorMessage: errorText,
    isEmailValid: true,
    isEndLoadData: false
  });

  expect(reducer({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    errorMessage: errorText,
    isEmailValid: true,
    isEndLoadData: false
  }, {
    type: ActionType.SET_ERROR_TEXT,
    payload: otherErrorText
  })).toEqual({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    errorMessage: otherErrorText,
    isEmailValid: true,
    isEndLoadData: false
  });

  expect(reducer({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    errorMessage: errorText,
    isEmailValid: false,
    isEndLoadData: false
  }, {
    type: ActionType.SET_ERROR_TEXT,
    payload: otherErrorText
  })).toEqual({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    errorMessage: otherErrorText,
    isEmailValid: true,
    isEndLoadData: false
  });

  expect(reducer({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    errorMessage: errorText,
    isEmailValid: true,
    isEndLoadData: false
  }, {
    type: ActionType.SET_ERROR_TEXT,
    payload: ``
  })).toEqual({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    errorMessage: ``,
    isEmailValid: true,
    isEndLoadData: false
  });
});

it(`Reducer should change isEmailValid`, () => {
  expect(reducer({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    errorMessage: ``,
    isEmailValid: true,
    isEndLoadData: false
  }, {
    type: ActionType.SET_EMAIL_VALID,
    payload: errorText
  })).toEqual({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    errorMessage: errorText,
    isEmailValid: false,
    isEndLoadData: false
  });

  expect(reducer({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    errorMessage: errorText,
    isEmailValid: true,
    isEndLoadData: false
  }, {
    type: ActionType.SET_EMAIL_VALID,
    payload: otherErrorText
  })).toEqual({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    errorMessage: otherErrorText,
    isEmailValid: false,
    isEndLoadData: false
  });

  expect(reducer({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    errorMessage: errorText,
    isEmailValid: false,
    isEndLoadData: false
  }, {
    type: ActionType.SET_EMAIL_VALID,
    payload: ``
  })).toEqual({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    errorMessage: ``,
    isEmailValid: false,
    isEndLoadData: false
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for require authorization returns correct action`, () => {
    expect(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)).toEqual({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.NO_AUTH,
    });

    expect(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)).toEqual({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    });

    expect(ActionCreator.setError(errorText)).toEqual({
      type: ActionType.SET_ERROR_TEXT,
      payload: errorText,
    });

    expect(ActionCreator.setEmailValidation(otherErrorText)).toEqual({
      type: ActionType.SET_EMAIL_VALID,
      payload: otherErrorText,
    });

    expect(ActionCreator.setLoadDataFlag(true)).toEqual({
      type: ActionType.SET_LOAD_DATA_FLAG,
      payload: true,
    });
  });
});
