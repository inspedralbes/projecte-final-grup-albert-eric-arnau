const checkParameters = (data) => {
  if (
    "meta" in data &&
    "groupID" in data &&
    "userID" in data &&
    "message" in data &&
    "name" in data &&
    "username" in data
  ) {
    return true;
  } else {
    return false;
  }
};

export default checkParameters;
