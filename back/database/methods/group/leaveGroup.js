import { doc, setDoc } from "firebase/firestore";
import { db } from "../../config/firebase.js";
import { getGroupDocument } from "./index.js";

const leaveGroup = async (userID, groupID) => {
  const group = await getGroupDocument(groupID);

  if (group.status) {
    return { status: group.status, message: group.message };
  }

  const arrayMembersDocRef = group.members.filter(
    (member) => member.id !== userID
  );

  const updatedGroup = {
    ...group,
    members: [...arrayMembersDocRef],
  };

  const groupDoc = doc(db, `groups/${groupID}`);
  await setDoc(groupDoc, updatedGroup);

  return group;
};

export default leaveGroup;
