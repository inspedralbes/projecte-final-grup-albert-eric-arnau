import {
  loginAction,
  logoutAction,
} from "../actions/action-creates/auth-creates";
import { auth } from "../../firebase/firebaseConfig";

export const loginThunk = (email, password) => {
  return async (dispatch) => {
    try {
      const { uid } = await auth.signInWithEmailAndPassword(email, password);
      const response = await fetch(`${process.env.API_URL}/user/${uid}`);
      const user = await response.json();
      dispatch(loginAction(user));
    } catch (err) {
      console.log(err);
    }
  };
};

export const autoLoginThunk = ({ uid }) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${process.env.API_URL}/user/${uid}`);
      const user = await response.json();
      dispatch(loginAction(user));
    } catch (err) {
      console.log(err);
    }
  };
};

export const registerThunk = (username, email, displayName, password) => {
  return async (dispatch) => {
    try {
      const { uid } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      const newUser = {
        name: displayName,
        userID: uid,
        username,
        email,
      };
      const response = await fetch(`${process.env.API_URL}/user/register`, {
        method: "POST",
        body: JSON.stringify(newUser),
      });
      const user = await response.json();
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
