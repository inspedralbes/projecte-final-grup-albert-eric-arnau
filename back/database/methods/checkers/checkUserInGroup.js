import { getGroupDocument } from "../group/index.js";

const checkUserInGroup = async (groupID, userID) => {
  const { members } = await getGroupDocument(groupID);

  return members.some((member) => member === userID);
};

export default checkUserInGroup;
