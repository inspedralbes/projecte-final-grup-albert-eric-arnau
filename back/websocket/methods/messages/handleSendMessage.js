import {
  checkGroupExists,
  checkUserInGroup,
} from "../../../database/methods/group/index.js";
import {
  checkParameters,
  checkRoomExists,
  checkUserInRoom,
} from "../checkers/index.js";
import wsSend from "../wsSend.js";
import { handleCreateRoom, handleBroadcastMessage } from "./index.js";

function handleSendMessage(data, ws, activeGroups) {
  if (!checkParameters(data)) return;

  const { groupID, userID, message } = data;

  if (!checkGroupExists(groupID))
    return wsSend(ws, {
      status: 404,
      message: "Group does not exist in the database",
    });

  // TODO: check if user is in the group database
  checkUserInGroup(groupID, userID);

  if (!checkRoomExists(groupID, activeGroups)) {
    handleCreateRoom(ws, userID, groupID, activeGroups);
  }

  if (!checkUserInRoom(groupID, userID, activeGroups)) {
    console.log("user not in group");
    return wsSend(ws, {
      status: 404,
      message: "User is not in the room",
    });
  }

  console.log("después", activeGroups);

  console.log("dataRecieved", {
    groupID,
    userID,
    message,
  });

  // handleBroadcastMessage(groupID, userID, message, ws, activeGroups);
}

export default handleSendMessage;
