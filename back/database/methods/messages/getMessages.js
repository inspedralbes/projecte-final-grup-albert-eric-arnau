import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase.js";

const getMessages = async (groupID) => {
  const messages = [];
  const messagesCol = collection(db, "groups", groupID, "messages");
  try {
    const messagesDocs = await getDocs(messagesCol);
    messagesDocs.forEach((element) => {
      const { message, time, user } = element.data();
      messages.push({ message, time, user: user.id });
    });
    return messages;
  } catch (error) {
    return {
      message: error.message,
      status: 404,
    };
  }
};

export default getMessages;
