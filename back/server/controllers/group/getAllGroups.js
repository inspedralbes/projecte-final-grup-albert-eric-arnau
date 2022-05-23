import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../database/config/firebase.js";

const getAllGroups = async (req, res) => {
  const groupsCollection = collection(db, "groups");
  try {
    const groups = await getDocs(groupsCollection);

    let allUserGroups = [];
    groups.forEach((group) => {
      allUserGroups.push(group.data());
    });

    return res.status(200).json(allUserGroups);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export default getAllGroups;
