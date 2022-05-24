import { saveMessage } from "../../../database/methods/messages/index.js";
// import { checkRoomExists, checkUserInRoom } from "../checkers/index.js";
// import { joinRoom, createAndJoinRoom } from "../rooms/index.js";
import { handleBroadcastMessage } from "./index.js";

const handleSendMessage = async (data, activeGroups) => {
  const { groupID, userID, message, name, username, imgLink, color } = data;

  const time = Date.now();
  const savedMessage = await saveMessage(
    groupID,
    userID,
    message,
    time,
    color,
    imgLink
  );

  if (!savedMessage) return;

  handleBroadcastMessage(
    groupID,
    userID,
    name,
    username,
    message,
    time,
    imgLink,
    activeGroups
  );
};

export default handleSendMessage;
