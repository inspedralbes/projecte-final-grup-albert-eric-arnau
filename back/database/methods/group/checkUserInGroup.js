import { getDoc } from "firebase/firestore";
import { getGroupDocument } from "./index.js";

const checkUserInGroup = async (groupID, userID) => {
  const { members } = await getGroupDocument(groupID);
  let userInGroup = false;
  members.map((member) => {
    if (member.id === userID) {
      userInGroup = true;
      return;
    }
  });
  if (userInGroup) return true;
  return false;
};

export default checkUserInGroup;
