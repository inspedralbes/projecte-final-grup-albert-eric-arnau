import { collection, getDocs, query, where, doc } from "firebase/firestore";
import { db } from "../../config/firebase.js";

const getAllUserGroupsInDatabase = async (userID) => {
  const groupsCollection = collection(db, "groups");
  const userDocument = doc(db, "users", userID);

  const q = query(
    groupsCollection,
    where("members", "array-contains", userDocument)
  );

  const groups = await getDocs(q);

  let allUserGroups = [];
  groups.forEach((group) => {
    allUserGroups.push(group.data());
  });

  return allUserGroups;
};

export default getAllUserGroupsInDatabase;
