const keys = {
  // group keys
  createGroup: ["admin", "name", "imgLink", "description", "limit", "password"],
  joinGroup: ["userID", "password"],
  leaveGroup: ["userID"],

  // user keys
  register: ["name", "email", "username"],
};

export default keys;
