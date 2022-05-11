import { joinRoom } from "./index.js";

const handleJoinRoom = async (ws, data, activeGroups) => {
  const { groupID, username } = data;
  await joinRoom(ws, groupID, username, activeGroups);

  return;
};

export default handleJoinRoom;
