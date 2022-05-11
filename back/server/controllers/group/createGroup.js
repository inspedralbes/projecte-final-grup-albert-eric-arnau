import { saveGroup } from "../../../database/methods/group/index.js";
import { checkParameters, keys } from "../../methods/parameters/index.js";

const createGroup = async (req, res) => {
  const data = req.body;
  if (checkParameters(data, keys.createGroup)) {
    await saveGroup(data);
  } else {
    res.status(500).json({
      message: "Please provide correct parameters",
    });
  }
};

export default createGroup;
