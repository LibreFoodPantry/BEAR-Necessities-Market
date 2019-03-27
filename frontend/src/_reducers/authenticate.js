import { userConstants } from "../_constants/index";

const initState = {
  authenticate: false,
};

export default function reducer(state = initState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        ...state,
        loggingIn: true
      };

    case userConstants.LOGIN_SUCCESS:
      return {
        ...state,
        authenticate: true,
        loginFailed: false
      };

    case userConstants.LOGIN_FAILURE:
      return {
        ...state,
        loggingIn: false,
        loginFailed: true
      };

    case userConstants.LOGOUT:
      return {
        ...state,
        authenticate: false
      };

    default:
      return state;
  }
}

