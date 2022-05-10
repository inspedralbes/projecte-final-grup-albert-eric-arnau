import {
  checkGroupExists,
  checkUserInGroup,
} from "../../../database/methods/group/index.js";
import getUserDocument from "../../../database/methods/user/getUserDocument.js";
import {
  checkParameters,
  checkRoomExists,
  checkUserInRoom,
} from "../checkers/index.js";
import handleJoinRoom from "./handleJoinRoom.js";
import { handleCreateRoom, handleBroadcastMessage } from "./index.js";

async function handleSendMessage(data, ws, activeGroups) {
  if (!checkParameters(data)) {
    console.log("Invalid parameters provided");
    return;
  }

  const { groupID, userID, message } = data;

  const groupExists = await checkGroupExists(groupID);
  const userInGroup = await checkUserInGroup(groupID, userID);
  if (!groupExists) {
    console.log("group does not exist in the database");
    return;
  } else if (!userInGroup) {
    console.log("user is not in group");
    return;
  }

  const { username, name: userDisplayName } = await getUserDocument(userID);

  if (!checkRoomExists(groupID, activeGroups)) {
    console.log("room does not exist, creating room");
    await handleCreateRoom(ws, username, groupID, activeGroups);
  } else if (!checkUserInRoom(groupID, username, activeGroups)) {
    console.log("user not in group, joining room");
    await handleJoinRoom(ws, groupID, username, activeGroups);
  }

  console.log("todo bien al final", activeGroups);

  handleBroadcastMessage(ws, groupID, userDisplayName, message, activeGroups);
}

export default handleSendMessage;
