import { collection, getDoc, DocumentReference } from "firebase/firestore";
import { db } from "../../config/firebase.js";

const getGroupDocument = async (groupID) => {
  const groupsCollection = collection(db, "groups");
  try {
    const groupData = await getDoc(groupsCollection, groupID);
    return groupData;
  } catch (error) {
    return {
      message: error.message,
      status: 500,
    };
  }
};

export default getGroupDocument;
