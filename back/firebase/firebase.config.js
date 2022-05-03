// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCfyGMjwVF2XeE7YtrRX3kr2JtGTN6QTcA",
  authDomain: "group-em.firebaseapp.com",
  projectId: "group-em",
  storageBucket: "group-em.appspot.com",
  messagingSenderId: "83951813260",
  appId: "1:83951813260:web:ed4d3e095e6c4e77e5f1a9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// exports
export const db = getFirestore(app);
export const auth = getAuth();
export const googleAuthProvider = new GoogleAuthProvider();
