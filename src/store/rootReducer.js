// redux libraries
import { combineReducers } from "redux";

// reducers
import login from "../components/Login/loginReducer";
import user from "../components/Register/signUpReducers";

// combine all reducers
export default combineReducers({
  login,
  user,
});
