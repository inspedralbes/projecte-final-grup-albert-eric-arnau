import { authTypes } from "../action-types";

const initialState = {
  user: null,
  isAuthenticated: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authTypes.login:
      return {
        ...state,
        isAuthenticated: true,
      };
    case authTypes.logout:
      return {
        user: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};
export default authReducer;
