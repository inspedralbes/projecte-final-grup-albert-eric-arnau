import { createGroupInDatabase } from "../../methods/group/index.js";
import { checkParameters, keys } from "../../methods/parameters/index.js";

const createGroup = async (req, res) => {
  const data = req.body;
  if (!checkParameters(data, keys.createGroup)) return;
  await createGroupInDatabase(data);
  return res.status(200).json({
    message: "Group created successfully",
  });
  return res.status(500).json({
    message: "Please provide correct parameters",
  });
};

export default createGroup;
