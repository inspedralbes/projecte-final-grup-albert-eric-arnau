import { doc, setDoc } from "firebase/firestore";
import { db } from "../../config/firebase.js";
import { getUserDocument } from "./index.js";

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
  const userExists = await getUserDocument(uid);

  if (!userExists.status) {
    try {
      await setDoc(userRef, {
        email,
        name,
        username,
        avatar,
        description,
        color,
      });

      return { uid, email, name, username, avatar, description, color };
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
