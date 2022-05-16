// ES ASYNC PARA QUE EN EL HANDLE ESPERE A QUE TERMINE PARA CONTINUAR
const joinRoom = async (ws, groupID, username, activeGroups) => {
  let obj = {};
  obj[username] = ws;
  activeGroups[groupID].push(obj);

  return;
};

export default joinRoom;
