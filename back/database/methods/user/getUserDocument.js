import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebase.js";
import { referencesToId } from "../transforms/index.js";

const getUserDocument = async (userID) => {
  const usersCollection = collection(db, "users");
  const userDocRef = doc(usersCollection, userID);
  try {
    const userDoc = await getDoc(userDocRef);
    const userData = userDoc.data();
    if (!userData) {
      throw new Error("User does not exist");
    }

    userData.favourites = referencesToId(userData.favourites);

    return userData;
  } catch (error) {
    return {
      message: error.message,
      status: 404,
    };
  }
};

export default getUserDocument;
