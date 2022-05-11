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
    case authTypes.LOGOUT:
      newState = {
        user: null,
        isAuthenticated: false,
      };
    default:
      break
  }
  return newState;
};
export default authReducer;
