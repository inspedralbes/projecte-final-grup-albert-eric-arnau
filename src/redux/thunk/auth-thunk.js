import {
  loginAction,
  logoutAction,
} from "../actions/action-creates/auth-creates";
import { auth } from "../../firebase/firebaseConfig";
import {
  browserLocalPersistence,
  createUserWithEmailAndPassword,
  setPersistence,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const loginThunk = (email, password) => {
  return async (dispatch) => {
    try {
      await setPersistence(auth, browserLocalPersistence);

      const { user: firebaseUser } = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/user/${firebaseUser.uid}`
      );
      if (response.ok) {
        const user = await response.json();
        dispatch(loginAction(user));
      }
      return response.status;
    } catch (err) {
      console.log(err);
    }
  };
};

export const autoLoginThunk = (user) => {
  return async (dispatch) => {
    try {
      if (user === null) {
        return;
      }
      const { uid } = user;

      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/user/${uid}`
      );
      if (response.ok) {
        const user = await response.json();
        dispatch(loginAction(user));
      }
      return response.status;
    } catch (err) {
      console.log(err);
    }
  };
};

export const registerThunk = (
  username,
  email,
  displayName,
  password,
  color
) => {
  return async (dispatch) => {
    try {
      const { user: firebaseUser } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const newUser = {
        name: displayName,
        userID: firebaseUser.uid,
        username,
        email,
        color,
      };

      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/user/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
        }
      );
      if (response.ok) {
        const user = await response.json();
        dispatch(loginAction(user));
      }
      return response.status;
    } catch (err) {
      console.log(err);
    }
  };
};

export const logoutThunk = () => {
  return async (dispatch) => {
    try {
      await signOut(auth);
      dispatch(logoutAction());
    } catch (err) {
      console.log(err);
    }
  };
};
