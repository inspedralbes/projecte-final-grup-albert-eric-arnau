import { getDoc } from "firebase/firestore";
import { getGroupDocument } from "./index.js";

const checkUserInGroup = async (groupID, userID) => {
  const { members } = await getGroupDocument(groupID);

  return members.some((member) => member.id === userID);
};

export default checkUserInGroup;
