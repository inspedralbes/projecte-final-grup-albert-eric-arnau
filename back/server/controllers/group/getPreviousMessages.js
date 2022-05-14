import { getGroupDocument } from "../../../database/methods/group/index.js";
import { getMessages } from "../../../database/methods/messages/index.js";

const getPreviousMessages = async (req, res) => {
  const groupID = req.params.idGroup || null;
  const time = req.params.time || Date.now();
  const limit = req.params.limit || 20;

  if (!groupID) return res.status(400).json({ message: "Wrong parameters" });

  const group = await getGroupDocument(groupID);
  if (group.status) return res.status(group.status).send(group.message);

  const messages = await getMessages(groupID, time, limit);
  if (messages.status)
    return res.status(messages.status).send(messages.message);

  return res.status(200).json(messages);
};

export default getPreviousMessages;
