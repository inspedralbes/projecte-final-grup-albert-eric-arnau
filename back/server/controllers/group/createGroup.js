import { createGroupInDatabase } from "../../methods/group/index.js";
import { checkParameters, keys } from "../../methods/parameters/index.js";

const createGroup = async (req, res) => {
  const data = req.body;
  if (!checkParameters(data, keys.createGroup))
    return res.status(400).json({ message: "Missing parameters" });

  const createdGroup = await createGroupInDatabase(data);
  if (createdGroup.status)
    return res.status(500).json({
      message: createdGroup.message,
    });

  return res.status(200).json({
    message: "Group created successfully",
  });
};

export default createGroup;
