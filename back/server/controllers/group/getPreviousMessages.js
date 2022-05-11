import { getGroupDocument } from "../../../database/methods/group/index.js";
import { getMessages } from "../../../database/methods/messages/index.js";
import { keys, checkParameters } from "../../methods/parameters/index.js";

const getPreviousMessages = async (req, res) => {
  const data = req.body;
  if (!checkParameters(data, keys.getPreviousMessages)) return;
  const { groupID } = data;
  const group = await getGroupDocument(groupID);
  if (group.status) return res.status(group.status).send(group.message);
  const messages = await getMessages(groupID);
  return res.status(200).json(messages);
};

export default getPreviousMessages;
