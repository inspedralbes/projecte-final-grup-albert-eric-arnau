import { authTypes } from "../action-types";

export const loginAction = (email, password) => {
  return {
    type: authTypes.LOGIN,
    payload: {
      email,
      password,
    },
  };
};

export const logoutAction = () => {
  return {
    type: authTypes.LOGOUT,
  };
};
