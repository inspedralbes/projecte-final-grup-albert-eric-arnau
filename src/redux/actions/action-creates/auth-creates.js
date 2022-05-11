import { authTypes } from "../action-types";
//esto esta hecho con el copilot, para recordarte lo de los actions xdd, en la carpeta thunk va lo mismo pero todo lo que sea async
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
