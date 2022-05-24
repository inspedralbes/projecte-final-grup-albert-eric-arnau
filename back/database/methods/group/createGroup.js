import {
  addDoc,
  collection,
  doc,
  DocumentReference,
  getDoc,
} from "firebase/firestore";
import { db } from "../../config/firebase.js";

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

    const createdGroup = await getDoc(newGroup);

    let groupToSend = createdGroup.data();
    groupToSend.uid = createdGroup.id;

    return groupToSend;
  } catch (error) {
    return {
      message: error.message,
      status: 404,
    };
  }
};

export default saveGroup;
