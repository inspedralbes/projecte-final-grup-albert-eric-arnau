import {
  loginAction,
  logoutAction,
} from "../actions/action-creates/auth-creates";
import { auth } from "../../firebase/firebaseConfig";

export const loginThunk = (email, password) => {
  return async (dispatch) => {
    try {
      const user = await auth.signInWithEmailAndPassword(email, password);
      dispatch(loginAction(user));
    } catch (err) {
      console.log(err);
    }
  };
};

export const logoutThunk = () => {
  return async (dispatch) => {
    try {
      await auth.signOut();
      dispatch(logoutAction());
    } catch (err) {
      console.log(err);
    }
  };
};
