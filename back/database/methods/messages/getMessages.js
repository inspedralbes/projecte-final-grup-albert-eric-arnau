import {
  collection,
  getDocs,
  orderBy,
  query,
  limit,
  where,
} from "firebase/firestore";
import { db } from "../../config/firebase.js";

const getMessages = async (groupID, time, messagesLimit) => {
  const messages = [];
  const messagesCol = collection(db, "groups", groupID, "messages");
  const q = query(
    messagesCol,
    orderBy("time", "asc"),
    limit(messagesLimit),
    where("time", "<=", time)
  );
  try {
    const messagesDocs = await getDocs(q);
    messagesDocs.forEach((element) => {
      const { message, time, user } = element.data();
      messages.push({ message, time, userID: user.id });
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
