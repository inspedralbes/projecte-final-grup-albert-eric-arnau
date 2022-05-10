const handleCreateRoom = async (ws, userID, groupID, activeGroups) => {
  activeGroups[groupID] = [];
  let obj = {};
  obj[userID] = ws;
  activeGroups[groupID].push(obj);
  ws["groupID"] = groupID;
  ws["userID"] = userID;

  console.log("room created");
  return;
};

export default handleCreateRoom;
