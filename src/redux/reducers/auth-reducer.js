import { authTypes } from "../actions/action-types";

const initialState = {
  user: null,
  isAuthenticated: false,
};

const authReducer = (state = initialState, action) => {
  let newState;
  const { type, payload } = action;
  switch (type) {
    case authTypes.LOGIN:
      newState = {
        user: payload,
        isAuthenticated: true,
      };
      break;
    case authTypes.LOGOUT:
      newState = {
        user: null,
        isAuthenticated: false,
      };
      break;
    default:
      newState = { ...state };
      break;
  }
  return newState;
};
export default authReducer;
