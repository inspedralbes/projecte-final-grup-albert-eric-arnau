// firebase imports
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { addDoc, collection, doc, getDoc, getDocs } from "firebase/firestore";
import { auth, db } from "./config/firebase.js";
import CryptoJS from "crypto-js";

const usersCollection = collection(db, "users");
const groupsCollection = collection(db, "groups");

const getGroup = (groupID) => getDoc(groupsCollection, groupID);
const getUser = (userID) => getDoc(usersCollection, userID);

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

export const SaveGroup = (data) => {
  const { admin, name, description, limit, password } = data;
  const newGroup = {
    admin: admin,
    name: name,
    description: description,
    limit: limit,
    password: CryptoJS.AES.encrypt(password, "groupem-4").toString(),
  };
  try {
    addDoc(groupsCollection, newGroup)
      .then(() => {
        console.log("Group added successfully");
      })
      .catch((error) => {
        console.log("inside addDoc", error);
      });
  } catch (error) {
    console.log("SaveGroup:", error);
    return;
  }
};

export const JoinGroup = async (data) => {
  const { userID, groupID, password } = data;
  const groupDoc = doc(groupsCollection, groupID);
  const groupData = await getDoc(groupDoc);

  const { password: hashedPassword } = groupData.data();
  const bytes = CryptoJS.AES.decrypt(hashedPassword, "groupem-4");
  const decryptedPassword = bytes.toString(CryptoJS.enc.Utf8);

  if (decryptedPassword === password) {
    try {
      const userDoc = doc(usersCollection, userID);
      const userData = await getDoc(userDoc);
      console.log("User joined group successfully");
    } catch (error) {
      console.log("JoinGroup:", error);
    }
  } else {
    return "Wrong password";
  }
};

export const SaveMessage = (groupID, userID, message) => {
  const groupDoc = getGroup(groupID);
  const messageData = {
    message: message,
    user: `users/${userID}`,
    timestamp: Date.now(),
  };
  try {
    const messagesCol = collection(groupDoc, "messages");
    addDoc(messagesCol, messageData);
  } catch (error) {
    console.log(error);
  }
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
