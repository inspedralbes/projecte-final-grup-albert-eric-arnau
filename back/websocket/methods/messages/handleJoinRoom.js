import { checkUserInRoom } from "../checkers/index.js";
import wsSend from "../wsSend.js";

function handleJoinRoom({ groupID, userID }, ws, activeGroups) {
  try {
    const inRoom = checkUserInRoom(groupID, userID, activeGroups);
    if (inRoom) {
      wsSend(ws, "you are already in a room", 0);
    } else {
      let obj = {};
      obj[userID] = ws;

      activeGroups[groupID].push(obj);
      ws["groupID"] = groupID;
      ws["userID"] = userID;
      wsSend(ws, "Joined succesfully", 1);
    }
  } catch (error) {
    wsSend(ws, "There was some problem in joining a room", 0);
  }
}

export default handleJoinRoom;
