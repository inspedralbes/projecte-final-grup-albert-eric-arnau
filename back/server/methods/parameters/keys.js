const keys = {
  // group keys
  createGroup: ["admin", "name", "imgLink", "description", "limit", "password"],
  joinGroup: ["userID", "groupID", "password"],
  getPreviousMessages: ["groupID"],

  // user keys
  register: ["name", "email", "username"],
};

export default keys;
