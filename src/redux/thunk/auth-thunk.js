import {
  loginAction,
  logoutAction,
} from "../actions/action-creates/auth-creates";
import { auth } from "../../firebase/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const loginThunk = (email, password) => {
  return async (dispatch) => {
    try {
      const { uid } = await signInWithEmailAndPassword(auth, email, password);
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

export const registerThunk = (
  username,
  email,
  displayName,
  password,
  color
) => {
  return async (dispatch) => {
    try {
      const { uid } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const newUser = {
        name: displayName,
        userID: uid,
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
          body: newUser,
        }
      );

      const user = await response.json();
      console.log(user);
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
