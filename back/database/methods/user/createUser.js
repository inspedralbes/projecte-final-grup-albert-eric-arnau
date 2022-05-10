import { addDoc, collection } from "firebase/firestore";
import { db } from "../../config/firebase.js";

async function createUser(email, name, username) {
  try {
    const user = await addDoc(db, collection("users"), {
      email,
      name,
      username,
      color,
    });

    return user;
  } catch (error) {
    return {
      error: error.message,
      statusCode: 500,
    };
  }
}

export default createUser;
