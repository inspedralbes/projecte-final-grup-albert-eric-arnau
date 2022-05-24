import {
  collection,
  getDocs,
  orderBy,
  query,
  limit,
  where,
} from "firebase/firestore";
import { db } from "../../config/firebase.js";
import getUserDocument from "../user/getUserDocument.js";

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
    for (const element of messagesDocs.docs) {
      const { message, time, user, color, imgLink } = element.data();
      const { name } = await getUserDocument(user.id);
      messages.push({ message, time, userID: user.id, name, color, imgLink });
    }
    return messages;
  } catch (error) {
    return {
      message: error.message,
      status: 404,
    };
  }
};

export default getMessages;
