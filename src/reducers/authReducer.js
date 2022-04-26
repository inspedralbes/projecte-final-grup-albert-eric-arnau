import { actionTypes } from "../actionTypes/actionTypes";

const initialState = {
  user: null,
  isAuthenticated: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.login:
      return {
        ...state,
        isAuthenticated: true,
      };
    case actionTypes.logout:
      return {
        user: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};
export default authReducer;
