// third-party liraries
import http from "axios";
import { createAction } from "@reduxjs/toolkit";

// constant url
import { BASE_URI } from "../../utils/constants";

// actions types
export const USER_LOGIN_PENDING = "USER_LOGIN_PENDING";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAILURE = "USER_LOGIN_FAILURE";

// action creators
const loginSuccess = createAction(USER_LOGIN_SUCCESS);
const loginPending = createAction(USER_LOGIN_PENDING);
const loginFailure = createAction(USER_LOGIN_FAILURE);

/**
 * @desc action
 * @param {object} loginData
 */
const userLogin = (loginData) => async (dispatch) => {
  dispatch(loginPending());
  try {
    let { data } = await http.post(`${BASE_URI}/auth`, loginData);
    dispatch({ type: USER_LOGIN_SUCCESS, data });
  } catch (error) {
    console;
    dispatch({ type: USER_LOGIN_FAILURE, data: error });
  }
};

export { userLogin };
