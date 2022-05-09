const checkParameters = (data) => {
  if (
    "meta" in data &&
    "groupID" in data &&
    "userID" in data &&
    "message" in data
  ) {
    return true;
  } else {
    return false;
  }
};

export default checkParameters;
