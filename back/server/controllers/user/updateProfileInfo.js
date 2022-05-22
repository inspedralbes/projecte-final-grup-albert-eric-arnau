import { updateUser } from "../../../database/methods/user/index.js";
import { checkParameters } from "../../methods/parameters/index.js";
import keys from "../../methods/parameters/keys.js";

const updateProfileInfo = async (req, res) => {
  if (!checkParameters(req.body, keys.updateUser))
    return res.status(400).send("Invalid parameters");

  const { userID, email, name, username, description, avatar, color } =
    req.body;

  const updatedUser = await updateUser(
    userID,
    email,
    name,
    username,
    description,
    avatar,
    color
  );

  if (userExists.status) {
    return res.status(500).json({
      message: error.message,
      status: 500,
    });
  }

  return res.status(200).json({ uid: userID, email, name, username, color });
};

export default updateProfileInfo;
