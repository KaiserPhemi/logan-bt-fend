// action types
import {
  REGISTRATION_PENDING,
  REGISTRATION_SUCCESSFUL,
  REGISTRATION_FAILURE,
} from "./signUpActions";

/**
 * @desc user signup reducer
 * @param {object} state
 * @param {object} action
 */
const userSignUpReducer = (state = {}, action) => {
  switch (action.type) {
    case REGISTRATION_PENDING:
      return state;
    case REGISTRATION_SUCCESSFUL:
      const { createdUser } = action.payload;
      return Object.assign({}, ...state, { user: { ...createdUser } });
    case REGISTRATION_FAILURE:
      return state;
    default:
      return state;
  }
};

export default userSignUpReducer;
