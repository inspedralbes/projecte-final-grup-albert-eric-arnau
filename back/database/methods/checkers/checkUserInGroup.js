import { getGroupDocument } from "../group/index.js";
import { referencesToId } from "../transforms/index.js";

const checkUserInGroup = async (groupID, userID) => {
  const { members } = await getGroupDocument(groupID);

  const membersById = referencesToId(members);

  return membersById.some((member) => member === userID);
};

export default checkUserInGroup;
