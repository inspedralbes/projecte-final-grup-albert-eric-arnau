import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebase.js";

const getUserDocument = async (userID) => {
  const usersCollection = collection(db, "users");
  const userDocRef = doc(usersCollection, userID);
  try {
    const userDoc = await getDoc(userDocRef);
    const userData = userDoc.data();
    if (!userData) {
      throw new Error("User does not exist");
    }
    return userData;
  } catch (error) {
    return {
      message: error.message,
      status: 404,
    };
  }
};

export default getUserDocument;
