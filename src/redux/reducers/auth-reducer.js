import { authTypes } from "../actions/action-types";

const initialState = {
  user: null,
  isAuthenticated: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authTypes.LOGIN:
      return {
        ...state,
        isAuthenticated: true,
      };
    case authTypes.LOGOUT:
      return {
        user: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};
export default authReducer;
