import { createGroup } from "../../../database/methods/group/index.js";
import { checkParameters, keys } from "../../methods/parameters/index.js";

const createGroupInDatabase = async (req, res) => {
  const data = req.body;

  if (
    !checkParameters(data, keys.createGroup) ||
    data.name === "" ||
    data.description === "" ||
    data.limit === ""
  )
    return res.status(400).json({ message: "Missing parameters" });

  const createdGroup = await createGroup(data);

  if (createdGroup.status)
    return res.status(createdGroup.status).json({
      message: createdGroup.message,
    });

  return res.status(201).json(createdGroup);
};

export default createGroupInDatabase;
