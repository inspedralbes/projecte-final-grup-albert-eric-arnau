const createGroup = async (req, res, next) => {
  if (CheckParameters(data, keys.createGroup)) {
    SaveGroup(data);
  } else {
    res.status(500).json({
      message: "Please provide correct parameters",
    });
  }
};

export default createGroup;
