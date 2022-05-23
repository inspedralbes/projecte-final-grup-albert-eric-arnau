import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../config/firebase.js";
import { getGroupDocument } from "./index.js";

const joinGroup = async (groupID, userID, password) => {
  const group = await getGroupDocument(groupID);
  let arrayMembers = [];

  if (!group.status) {
    for (const member of group.members) {
      const newMember = await getDoc(member);
      arrayMembers.push(newMember.data().uid);
    }

    if (group.password !== password)
      return { status: 401, message: "Wrong password" };

    if (arrayMembers.includes(userID))
      return { status: 409, message: "User already in group" };

    if (group.members.length >= group.limit)
      return { status: 409, message: "Group is full" };

    const updatedGroup = {
      ...group,
      admin: doc(db, `users/${group.admin.id}`),
      members: [...group.members, doc(db, `users/${userID}`)],
    };

    const groupDoc = doc(db, `groups/${groupID}`);
    await setDoc(groupDoc, updatedGroup);
  }

  return group;
};

export default joinGroup;
