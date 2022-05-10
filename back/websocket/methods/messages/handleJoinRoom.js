const handleJoinRoom = async (ws, groupID, userID, activeGroups) => {
  let obj = {};
  obj[userID] = ws;
  activeGroups[groupID].push(obj);
  ws["groupID"] = groupID;
  ws["userID"] = userID;

  console.log("joined successfully");
  return;
};

export default handleJoinRoom;
