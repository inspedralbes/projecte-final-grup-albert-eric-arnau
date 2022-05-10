import { getGroupDocument } from "./index.js";

const checkGroupExists = async (groupId) => {
  const data = await getGroupDocument(groupId);
  if (data.status) return false;
  return true;
};

export default checkGroupExists;
