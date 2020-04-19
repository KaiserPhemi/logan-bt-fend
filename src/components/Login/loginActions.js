// third-party liraries
import http from "axios";

// constant url
import { BASE_URI } from "../../utils/constants";

// actions types
export const USER_LOGIN_PENDING = "USER_LOGIN_PENDING";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAILURE = "USER_LOGIN_FAILURE";

/**
 * @desc action creator
 * @param {object} payload
 */
const loginActionCreator = (payload) => {
  return { type: USER_LOGIN_PENDING, payload };
};

/**
 * @desc action
 * @param {object} loginData
 */
const userLogin = (loginData) => async (dispatch) => {
  console.log("we got to action", loginData);
  dispatch({
    type: USER_LOGIN_PENDING,
  });
  try {
    let apiResponse = await http.post(`${BASE_URI}/auth`, loginData);
    dispatch({ type: USER_LOGIN_PENDING, apiResponse });
  } catch (error) {
    dispatch({ type: USER_LOGIN_FAILURE, error });
  }
};

export { userLogin };
