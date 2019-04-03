import stepCounter from "./stepCounter";
import users from "./users";
import auth from "./authenticate";
import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { alert } from "./alert.reducer";


const reducers = combineReducers({
  stepCounter,
  users,
  alert,
  auth,
  form: formReducer,
});

export default reducers;
