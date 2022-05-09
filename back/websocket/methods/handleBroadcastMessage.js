import { checkRoomExists } from "./checkers";
import { wsSend } from "./index.js";

function handleBroadcastMessage(groupID, userID, message, ws, activeGroups) {
  try {
    const group = activeGroups[groupID];
    for (let i = 0; i < group.length; i++) {
      let user = group[i];
      for (let username in user) {
        let wsUserID = user[username];
        if (ws !== wsUserID) {
          wsUserID.send(
            JSON.stringify({
              user: userID,
              message: message,
              status: Status ? Status : 1,
            })
          );
        }
      }
    }
    SaveMessage(groupID, userID, message);
  } catch (error) {
    wsSend(ws, "There was some problem in sending message", 0);
  }
}

export default handleBroadcastMessage;
