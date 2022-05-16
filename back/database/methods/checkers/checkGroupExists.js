import { getGroupDocument } from "../group/index.js";

const checkGroupExists = async (groupID) => {
  const data = await getGroupDocument(groupID);
  if (data.status) return false;
  return true;
};

export default checkGroupExists;
