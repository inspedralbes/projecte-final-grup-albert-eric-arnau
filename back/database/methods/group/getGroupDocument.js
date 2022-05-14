import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebase.js";
import { referencesToId } from "../transforms/index.js";

const getGroupDocument = async (groupID) => {
  const groupsCollection = collection(db, "groups");
  const groupDocRef = doc(groupsCollection, groupID);
  try {
    const groupDoc = await getDoc(groupDocRef);
    const groupData = groupDoc.data();

    if (!groupData) {
      throw new Error("Group does not exist");
    }

    return groupData;
  } catch (error) {
    return {
      message: error.message,
      status: 404,
    };
  }
};

export default getGroupDocument;
