import { getGroupDocument } from "../../../database/methods/group/index.js";
import { getMessages } from "../../../database/methods/messages/index.js";

const getPreviousMessages = async (req, res) => {
  const groupID = req.params.id;
  const time = req.params.time || Date.now();
  const group = await getGroupDocument(groupID);
  if (group.status) return res.status(group.status).send(group.message);
  const messages = await getMessages(groupID, time);
  return res.status(200).json(messages);
};

export default getPreviousMessages;
