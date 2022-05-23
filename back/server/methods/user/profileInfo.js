import { getUserDocument } from "../../../database/methods/user/index.js";

const profileInfo = async (userID) => {
  let userInfo = await getUserDocument(userID);

  if (userInfo.status)
    return {
      message: userInfo.message,
      status: userInfo.status,
    };

  return userInfo;
};

export default profileInfo;
