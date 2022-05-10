const handleCreateRoom = (ws, userID, groupID, activeGroups) => {
  activeGroups[groupID] = [];
  let obj = {};
  obj[userID] = ws;
  activeGroups[groupID].push(obj);
  ws["groupID"] = groupID;
  ws["userID"] = userID;

  console.log("room created");
  // TODO: eliminar el ws.send()
  ws.send(
    JSON.stringify({
      message: "Room created succesfully",
      status: 201,
    })
  );
};

export default handleCreateRoom;
