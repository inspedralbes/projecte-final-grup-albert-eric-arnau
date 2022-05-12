import { authTypes } from "../actions/action-types";

const initialState = {
  user: null,
  isAuthenticated: false,
};

const authReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case authTypes.LOGIN:
      newState = {
        ...state,
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
