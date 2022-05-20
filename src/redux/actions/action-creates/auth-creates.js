import { authTypes } from "../action-types";

export const loginAction = (user) => {
  return {
    type: authTypes.LOGIN,
    payload: user,
  };
};

export const logoutAction = () => {
  return {
    type: authTypes.LOGOUT,
  };
};
