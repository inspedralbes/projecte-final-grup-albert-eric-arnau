import { joinRoom } from "./index.js";

const createAndJoinRoom = async (ws, userID, groupID, activeGroups) => {
  activeGroups[groupID] = [];
  await joinRoom(ws, groupID, userID, activeGroups);

  return;
};

export default createAndJoinRoom;
