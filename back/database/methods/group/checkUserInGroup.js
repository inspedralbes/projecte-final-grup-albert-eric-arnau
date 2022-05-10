import { getDoc } from "firebase/firestore";
import { getGroupDocument } from "./index.js";

const checkUserInGroup = async (groupID, userID) => {
  const groupDoc = await getGroupDocument(groupID);
  const groupData = await getDoc(groupDoc);
  const members = groupData.data();
  console.log(members);
};

export default checkUserInGroup;
