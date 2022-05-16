import { addDoc, collection, doc } from "firebase/firestore";
import { db } from "../../config/firebase.js";

const saveMessage = async (groupID, userID, message, time) => {
  try {
    const messagesCol = collection(db, "groups", groupID, "messages");
    const userRef = doc(db, "user", userID);
    const messageDoc = await addDoc(messagesCol, {
      message,
      time,
      user: userRef,
    });

    if (!messageDoc) throw new Error("Message could not be saved");

    return true;
  } catch (error) {
    return {
      message: error.message,
      status: 500,
    };
  }
};

export default saveMessage;
