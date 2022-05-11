import { getGroupDocument } from "../../../database/methods/group/index.js";
import { keys } from "../../methods/parameters/index.js";

const getPreviousMessages = async (req, res) => {
  const data = req.body;
  try {
    if (checkParameters(data, keys.getPreviousMessages)) {
      const group = await getGroupDocument(data.groupID);
      console.log(group);
    }
    return res.status(200).json({ group });
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    };
  }
};

export default getPreviousMessages;
