import { profileInfo } from "../../methods/user/index.js";

const getProfileInfo = async (req, res) => {
  const userID = req.params.id;
  const userInfo = await profileInfo(userID);
  if (userInfo.status)
    return res.status(userInfo.status).json(userInfo.message);

  return res.status(200).json(userInfo);
};

export default getProfileInfo;
