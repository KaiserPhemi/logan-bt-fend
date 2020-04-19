// redux libraries
import { combineReducers } from "redux";

// reducers
import login from "../components/Login/loginReducer";

// combine all reducers
export default combineReducers({ login });
