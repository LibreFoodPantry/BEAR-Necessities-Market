import axios from 'axios';
const LOGIN_SUCCESS = "authentication/LOGIN_SUCCESS";
const LOGOUT = "authentication/LOGOUT";

const initState = {
  authenticate: false
};

export default function reducer(state = initState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        authenticate: true
      };

    case LOGOUT:
      return {
        ...state,
        authenticate: false
      };

    default:
      return state;
  }
}

export function authenticate(email = "", password = "") {
  axios.post("/auth/login/", {
    "email" : email,
    "password": password
  }).then(res => {
    return 
      type: LOGIN_SUCCESS 
  })
  .catch(error => {
    return
      type: LOGOUT
  })    
  };


export function logout() {
  return {
    type: LOGOUT
  };
}
