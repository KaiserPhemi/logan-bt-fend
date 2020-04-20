// action types
import {
  USER_LOGIN_PENDING,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
} from "./loginActions";

// initial state
import initialState from "../../store/initialState";

/**
 * @desc login reducer
 * @param {object} state
 * @param {object} action
 */
const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_FAILURE:
      return state;
    case USER_LOGIN_SUCCESS:
      const { data } = action.payload;
      console.log("Reducer", data);
      return Object.assign({}, ...state, {
        isUserLoggedIn: true,
      });
    case USER_LOGIN_PENDING:
      return state;
    default:
      return state;
  }
};

export default loginReducer;
