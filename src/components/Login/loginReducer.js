// action types
import {
  USER_LOGIN_PENDING,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
} from "./loginActions";

const loginReducer = (state = {}, action) => {
  console.log("We are in reducer", action);
  switch (action.type) {
    case USER_LOGIN_FAILURE:
      return state;
    case USER_LOGIN_SUCCESS:
      return state;
    case USER_LOGIN_PENDING:
      return state;
    default:
      return state;
  }
};
