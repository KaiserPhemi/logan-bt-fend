// action types
import {
  USER_LOGIN_PENDING,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
} from "./loginActions";

const initialState = {
  isUserLoggedIn: false,
};

const loginReducer = (state = { ...initialState }, action) => {
  console.log("We are in reducer", action);
  switch (action.type) {
    case USER_LOGIN_FAILURE:
      return;
    case USER_LOGIN_SUCCESS:
      return [...state, Object.assign({}, { isUserLoggedIn: true })];
    case USER_LOGIN_PENDING:
      return state;
    default:
      return state;
  }
};

export default loginReducer;
