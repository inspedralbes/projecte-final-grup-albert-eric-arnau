const keys = {
  // group keys
  createGroup: ["admin", "name", "imgLink", "description", "limit", "password"],
  joinGroup: ["userID", "password"],
  leaveGroup: ["userID"],

  // user keys
  register: ["userID", "email", "name", "username", "color"],
};

export default keys;
