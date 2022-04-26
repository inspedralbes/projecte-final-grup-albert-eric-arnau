// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider, // not used for now
} from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfyGMjwVF2XeE7YtrRX3kr2JtGTN6QTcA",
  authDomain: "group-em.firebaseapp.com",
  projectId: "group-em",
  storageBucket: "group-em.appspot.com",
  messagingSenderId: "83951813260",
  appId: "1:83951813260:web:ed4d3e095e6c4e77e5f1a9",
  //measurementId: "G-5FBRGPXYZ7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

// exports for use in other files
export { auth, db, GoogleAuthProvider };

// TODO - create more actions
// TODO - create more reducers
