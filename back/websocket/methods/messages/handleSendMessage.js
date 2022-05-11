import {
  checkGroupExists,
  checkUserInGroup,
} from "../../../database/methods/checkers/index.js";
import { saveMessage } from "../../../database/methods/messages/index.js";
import { checkRoomExists, checkUserInRoom } from "../checkers/index.js";
import { joinRoom, createRoom } from "../rooms/index.js";
import { handleBroadcastMessage } from "./index.js";

const handleSendMessage = async (ws, data, activeGroups) => {
  const { groupID, userID, message, name, username } = data;

  const groupExists = await checkGroupExists(groupID);
  const userInGroup = await checkUserInGroup(groupID, userID);

  if (!groupExists || !userInGroup) return;

  if (!checkRoomExists(groupID, activeGroups)) {
    await createRoom(ws, username, groupID, activeGroups);
  } else if (!checkUserInRoom(groupID, username, activeGroups)) {
    await joinRoom(ws, groupID, username, activeGroups);
  }

  const time = Date.now();
  console.log("antes de saveMessage");
  const savedMessage = await saveMessage(groupID, userID, message, time);
  console.log("despues", savedMessage);

  if (!savedMessage) return;

  handleBroadcastMessage(
    groupID,
    userID,
    name,
    username,
    message,
    time,
    activeGroups
  );
};

export default handleSendMessage;
