import { doc, setDoc } from "firebase/firestore";
import { db } from "../../config/firebase.js";
import { getUserDocument } from "./index.js";

async function createUser(uid, email, name, username, color) {
  const userRef = doc(db, "users", uid);
  const userExists = await getUserDocument(uid);

  if (!userExists.status) {
    return {
      message: "User already exists",
      status: 400,
    };
  }

  try {
    await setDoc(userRef, {
      uid,
      email,
      name,
      username,
      avatar: "",
      description: "",
      favourites: [],
      color,
    });

    return { uid, email, name, username, color };
  } catch (error) {
    return {
      message: error.message,
      status: 500,
    };
  }
}

export default createUser;
