import { createGroup } from "../../../database/methods/group/index.js";
import { checkParameters, keys } from "../../methods/parameters/index.js";

const createGroupInDatabase = async (req, res) => {
  const data = JSON.parse(req.body);

  if (!checkParameters(data, keys.createGroup))
    return res.status(400).json({ message: "Missing parameters" });

  // TODO check for security issues (sanear el body)

  const createdGroup = await createGroup(data);

  if (createdGroup.status)
    return res.status(createdGroup.status).json({
      message: createdGroup.message,
    });

  return res.status(201).json({
    message: "Group created successfully",
  });
};

export default createGroupInDatabase;
