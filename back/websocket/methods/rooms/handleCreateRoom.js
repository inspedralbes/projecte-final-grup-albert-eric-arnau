import { createRoom } from "./index.js";

const handleCreateRoom = async (ws, data, activeGroups) => {
  const { groupID, username } = data;
  createRoom(ws, username, groupID, activeGroups);

  return;
};

export default handleCreateRoom;
