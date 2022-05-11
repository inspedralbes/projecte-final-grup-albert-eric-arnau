import { getUserDocument } from "../../../database/methods/user/index.js";

const profileInfo = async (userID) => {
  const userInfo = await getUserDocument(userID);
  if (userInfo.status) return userInfo;
  return userInfo;
};

export default profileInfo;
