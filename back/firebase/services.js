// firebase imports
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { addDoc, collection, doc, getDoc, getDocs } from "firebase/firestore";
import { auth, db } from "./firebase.config.js";

const usersCollection = collection(db, "users");
const groupsCollection = collection(db, "groups");

// login user with email and password
export const Login = async (email, password) => {
  try {
    const user = await signInWithEmailAndPassword(email, password);
    return user;
  } catch (error) {
    return error;
  }
};

// userInfo = { userName, displayName, email, photoURL }
export const Register = (email, username, name, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then(async ({ user }) => {
      console.log(user.uid);
      const newUser = {
        email,
        username: "",
        name: "",
        favourites: [],
      };
      addDoc(usersCollection, newUser)
        .then(() => {
          console.log("User added successfully");
        })
        .catch((error) => {
          console.log("inside addDoc", error);
        });
    })
    .catch((error) => {
      console.log("createUserWithEmailAndPassword", error);
    });
};

// test for getting all users info
export const test = async (userID) => {
  // const userRef = doc(usersRef, userID);
  // const documents = await getDoc(userRef);

  // const { favourites } = documents.data();
  const grref = doc(groupsRef, "uJZNitszHdqWRqceyXXn");
  const group = await getDoc(grref);
  console.log(group.data());

  // const groups = doc(groupsRef, favourites);
  // groups.forEach((element) => {
  //   console.log(element.data());
  // });
  //console.log(userData.favourites);

  // documents.forEach((element) => {
  //   console.log(element.data());
  // });
};

export const SaveMessage = (groupID, message) => {
  const messageRef = db.collection("groups").doc(groupID);
  const messageData = {
    message: message,
    timestamp: Date.now(),
  };
  return messageRef.update({
    messages: firebase.firestore.FieldValue.arrayUnion(messageData),
  });
};

export const CheckIfGroupExists = (groupID) => {
  // check if group is already exist or not
  if (groupID in groups) {
    return true;
  } else {
    return false;
  }
};

// userInfo = { email, password }
export const HandleLoginWithEmailPassword = (userInfo) => {
  const { email, password } = userInfo;
  signInWithEmailAndPassword(email, password)
    .then((user) => {
      return user.user.uid;
    })
    .catch((error) => {
      return error.message;
    });
};
