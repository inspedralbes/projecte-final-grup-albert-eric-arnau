import {
  checkGroupExists,
  checkUserInGroup,
} from "../../../database/methods/checkers/index.js";
import { leaveGroup } from "../../../database/methods/group/index.js";
import { checkParameters, keys } from "../../methods/parameters/index.js";

const leaveGroupInDatabase = async (req, res) => {
  if (!checkParameters(req.body, keys.leaveGroup))
    return res.status(400).json({ message: "Wrong parameters" });

  const groupID = req.params.idGroup;
  const { userID } = req.body;

  const groupExists = await checkGroupExists(groupID);

  if (!groupExists)
    return res.status(404).json({ message: "Group not exists" });

  const userInGroup = await checkUserInGroup(groupID, userID);

  if (!userInGroup)
    return res.status(404).json({ message: "User is not in the group" });

  const left = await leaveGroup(userID, groupID);
  if (left.status) return res.status(left.status).send(left.message);

  return res.status(202).json({ message: "Left successfully" });
};

export default leaveGroupInDatabase;
