import stepCounter from "./stepCounter";
import users from "./users";
import auth from "./authenticate";
import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

const reducers = combineReducers({
  stepCounter,
  users,
  auth,
  form: formReducer
});

export default reducers;
