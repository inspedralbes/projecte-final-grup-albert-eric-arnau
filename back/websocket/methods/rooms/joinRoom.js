// ES ASYNC PARA QUE EN EL HANDLE ESPERE A QUE TERMINE PARA CONTINUAR
const joinRoom = async (ws, groupID, userID, activeGroups) => {
  let obj = {};
  obj[userID] = ws;
  activeGroups[groupID].push(obj);
  ws["groupID"] = groupID;
  ws["userID"] = userID;

  return;
};

export default joinRoom;
