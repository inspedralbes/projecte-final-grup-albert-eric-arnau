import { joinGroup } from "../../../database/methods/group/index.js";
import { checkParameters, keys } from "../../methods/parameters/index.js";

const joinGroupInDatabase = async (req, res) => {
  const body = JSON.parse(req.body);
  if (!checkParameters(body, keys.joinGroup))
    return res.status(400).json({ message: "Wrong parameters" });

  const groupID = req.params.idGroup;
  const { userID, password } = body;

  const joined = await joinGroup(groupID, userID, password);
  if (joined.status)
    return res.status(joined.status).send({ message: joined.message });

  return res.status(200).json({ message: "Joined successfully" });
};

export default joinGroupInDatabase;
