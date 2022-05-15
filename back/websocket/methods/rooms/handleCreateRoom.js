import { createAndJoinRoom } from "./index.js";

const handleCreateRoom = async (ws, data, activeGroups) => {
  const { groupID, username } = data;
  createAndJoinRoom(ws, username, groupID, activeGroups);

  return;
};

export default handleCreateRoom;
