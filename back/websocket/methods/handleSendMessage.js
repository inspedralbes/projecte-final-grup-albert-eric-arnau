import { checkParameters, checkRoomExists, checkUserInRoom } from "./checkers";
import handleBroadcastMessage from "./handleBroadcastMessage";
import { wsSend } from "./index.js";

function handleSendMessage(data, ws, activeGroups) {
  if (!checkParameters(data)) return;

  const { groupID, userID, message } = data;

  if (!checkRoomExists(groupID, activeGroups)) {
    wsSend(ws, "ROOM DOES NOT EXIST IN THE WEBSOCKET", 0);
    return;
  }

  if (!checkUserInRoom(groupID, userID, activeGroups)) return;

  console.log({
    groupID,
    userID,
    message,
  });

  handleBroadcastMessage(groupID, userID, message, ws, activeGroups);
}

export default handleSendMessage;
