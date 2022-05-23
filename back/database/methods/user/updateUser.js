import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../config/firebase.js";

async function updateUser(
  uid,
  email,
  name,
  username,
  description,
  avatar,
  color
) {
  const userRef = doc(db, "users", uid);
  const usersCollection = collection(db, "users");
  const userDocRef = doc(usersCollection, uid);
  const userDoc = await getDoc(userDocRef);
  const userData = userDoc.data();

  if (!userData.status) {
    try {
      await setDoc(userRef, {
        ...userData,
        name,
        avatar,
        description,
        color,
      });

      const newUser = {
        uid,
        email,
        name,
        username,
        avatar,
        description,
        color,
      };

      return newUser;
    } catch (error) {
      return {
        message: error.message,
        status: 500,
      };
    }
  }

  return {
    message: "User does not exist",
    status: 400,
  };
}

export default updateUser;
