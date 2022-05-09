// import cosas de firebase

const createGroup = async (req, res, next) => {
  if (CheckParameters(data, keys.createGroup)) {
    SaveGroup(data);
  } else {
    res.send({
      status: "error",
      message: "Please provide correct parameters",
    });
  }
};

export default createGroup;
