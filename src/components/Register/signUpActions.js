// third-party libraries
import http from "axios";
import { createAction } from "@reduxjs/toolkit";

// base url
import { BASE_URI } from "../../utils/constants";

// action types
export const REGISTRATION_PENDING = "REGISTRATION_PENDING";
export const REGISTRATION_SUCCESSFUL = "REGISTRATION_SUCCESSFUL";
export const REGISTRATION_FAILURE = "REGISTRATION_FAILURE";

// action craators
const signUpPending = createAction(REGISTRATION_PENDING);
const signUpSuccessful = createAction(REGISTRATION_SUCCESSFUL);
const signUpFailure = createAction(REGISTRATION_FAILURE);

/**
 * @desc user sign up
 * @param {object} userData
 */
const userSignUp = (userData) => async (dispatch) => {
  dispatch(signUpPending());
  try {
    let { data } = await http.post(`${BASE_URI}/users`, userData);
    dispatch(signUpSuccessful(data));
  } catch (error) {
    if (error) {
      dispatch(signUpFailure());
    }
  }
};

export { userSignUp };
