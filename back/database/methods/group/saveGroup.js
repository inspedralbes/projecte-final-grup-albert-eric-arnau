import { addDoc, collection, CollectionReference } from "firebase/firestore";
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
    const adminDoc = await getUserDocument(admin);
    const adminRef = new CollectionReference(adminDoc);
    const newGroup = await addDoc(collection(db, "groups"), {
      admin,
      description,
      imgLink,
      limit,
      name,
      password,
      members: [adminRef],
    });
    console.log();

    return newGroup;
  } catch (error) {
    return {
      message: error.message,
      status: 404,
    };
  }
};

export default saveGroup;
