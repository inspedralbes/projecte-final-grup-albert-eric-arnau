import { addDoc, collection } from "firebase/firestore";
import { db } from "../../config/firebase";

async function createUserDatabase(email, name, username) {
  try {
    const user = await addDoc(db, collection("users"), {
      email,
      name,
      username,
    });

    return user;
  } catch (error) {
    return {
      error: error.message,
      statusCode: 500,
    };
  }
}

export default createUserDatabase;
