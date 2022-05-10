import { getDoc } from "firebase/firestore";
import { db } from "../../config/firebase.js";

const getUserDocument = async (userID) => {
  const usersCollection = collection(db, "users");
  const userData = await getDoc(usersCollection, userID);
  return userData;
};

export default getUserDocument;
