import { checkParameters, keys } from "../../methods/parameters/index.js";

const createGroup = async (req, res) => {
  if (checkParameters(data, keys.createGroup)) {
    SaveGroup(data);
  } else {
    res.status(500).json({
      message: "Please provide correct parameters",
    });
  }
};

export default createGroup;
