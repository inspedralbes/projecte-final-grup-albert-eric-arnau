import { getUserDocument } from "../../../database/methods/user/index.js";

const profileInfo = async (userID) => {
  const userInfo = await getUserDocument(userID);
  return userInfo;
};

export default profileInfo;
