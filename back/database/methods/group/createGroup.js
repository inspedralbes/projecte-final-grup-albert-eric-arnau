import { addDoc, collection, doc, DocumentReference } from "firebase/firestore";
import { db } from "../../config/firebase.js";
import getUserDocument from "../user/getUserDocument.js";

const saveGroup = async ({
  admin,
  description,
  imgLink,
  limit,
  name,
  password = "",
}) => {
  try {
    const adminDoc = doc(db, `users/${admin}`);
    const newGroup = await addDoc(collection(db, "groups"), {
      admin: adminDoc,
      description,
      imgLink,
      limit,
      name,
      password,
      members: [adminDoc],
    });

    return newGroup;
  } catch (error) {
    return {
      message: error.message,
      status: 404,
    };
  }
};

export default saveGroup;
