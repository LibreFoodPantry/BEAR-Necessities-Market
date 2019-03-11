import { userConstants } from "../_constants/index";

const initState = {
  authenticate: false
};

export default function reducer(state = initState, action) {
  switch (action.type) {
    case userConstants.LOGIN_SUCCESS:
      return {
        ...state,
        authenticate: true
      };

    case userConstants.LOGIN_FAILURE:
      return {
        ...state,
        authenticate: false
      };

    default:
      return state;
  }
}


export function logout() {
  return {
    type: userConstants.LOGOUT
  };
}
