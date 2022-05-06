import { WebSocketServer } from "ws";
import express from "express";
import router from "./api.js";
import { SaveGroup, SaveMessage } from "./firebase/services.js";

const app = express();
const apiPort = process.env.PORT || 8001;
const wsPort = process.env.PORT || 8000;

// initialize API server
app.use("/", router);
app.listen(apiPort, () => {
  console.log("API server on port", apiPort);
});

// initialize WS server
const wss = new WebSocketServer({ port: wsPort });
console.log("WS server on port", wsPort);

function noop() {}

function heartbeat() {
  this.isAlive = true;
}

let activeGroups = {};

const CheckParameters = (data) => {
  try {
    if (
      "meta" in data &&
      "groupID" in data &&
      "userID" in data &&
      "message" in data
    ) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
};

const CheckGroup = (groupID) => {
  // check if group is already exist or not
  if (groupID in activeGroups) {
    return true;
  } else {
    return false;
  }
};

// NOT USED

// const insideRoomdataExist = (arr, data) => {
//   let status = false;
//   for (let i = 0; i < arr.length; i++) {
//     if (data in arr[i]) {
//       status = true;
//       break;
//     }
//   }
//   return status;
// };

const CheckUserInGroup = (groupID, userID) => {
  let status = false;
  const currentGroup = activeGroups[groupID];
  for (let i = 0; i < currentGroup.length; i++) {
    let currentUser = data[i];
    for (const checkingUserID in currentUser) {
      if (userID == checkingUserID) {
        status = true;
        break;
      }
    }
  }
  return status;
};

// create group
const CreateGroup = (data, ws) => {
  try {
    let { groupID, userID } = data;
    const status = CheckGroup(groupID);
    if (status) {
      ws.send(
        JSON.stringify({
          message: "group already exist",
          status: 0,
        })
      );
    } else {
      activeGroups[groupID] = [];
      let obj = {};
      obj[userID] = ws;
      activeGroups[groupID].push(obj);
      ws["groupID"] = groupID;
      ws["userID"] = userID;
      ws["admin"] = true;
      ws.send(
        JSON.stringify({
          message: "room created succesfully",
          status: 1,
        })
      );
      // TODO save group info in the database
      SaveGroup(groupID, userID);
    }
  } catch (error) {
    ws.send(
      JSON.stringify({
        message: "there was some problem in creating a room",
        status: 0,
      })
    );
  }
};

// join room
const joinRoom = (data, ws) => {
  try {
    let { groupID, userID } = data;
    const roomExist = groupID in activeGroups;
    if (!roomExist) {
      ws.send(
        JSON.stringify({
          message: "Check room id",
          status: 0,
        })
      );
      return;
    }
    const inRoom = CheckUserInGroup(groupID, ws, userID);
    if (inRoom) {
      ws.send(
        JSON.stringify({
          message: "you are already in a room",
          status: 0,
        })
      );
    } else {
      let obj = {};
      obj[userID] = ws;
      activeGroups[groupID].push(obj);
      ws["groupID"] = groupID;
      ws["userID"] = userID;
      ws.send(
        JSON.stringify({
          message: "Joined succesfully",
          status: 1,
        })
      );
    }
  } catch (error) {
    ws.send(
      JSON.stringify({
        message: "There was some problem in joining a room",
        status: 0,
      })
    );
  }
};

// send message
const sendMessage = (data, ws, Status = null) => {
  try {
    let { groupID, message, userID } = data;
    const groupExists = groupID in activeGroups;
    if (!groupExists) {
      ws.send(
        JSON.stringify({
          message: "Check room id",
          status: 0,
        })
      );
      return;
    }
    // check whether client is in room or not
    const userExists = CheckUserInGroup(groupID, ws, userID);
    if (!userExists) {
      ws.send(
        JSON.stringify({
          message: "You are not allowed to send message",
          status: 0,
        })
      );
      return;
    }
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
    ws.send(
      JSON.stringify({
        message: "There was some problem in sending message",
        status: 0,
      })
    );
  }
};

const leaveRoom = (ws, data) => {
  try {
    const { roomID } = data;
    // manual code started------------------------------------------------------------
    const roomExist = roomID in activeGroups;
    if (!roomExist) {
      ws.send(
        JSON.stringify({
          message: "Check room id",
          status: 0,
        })
      );
      return;
    }
    if ("admin" in ws) {
      data["message"] = "Admin left the room.";
      sendMessage(data, ws, (Status = 2));
      delete activeGroups[ws.roomID];
      return;
    } else {
      // find the index of object
      lst_obj = activeGroups[roomID];
      let index = null;
      for (let i = 0; i < lst_obj.length; i++) {
        let temp_obj = lst_obj[i];
        for (let key in temp_obj) {
          let temp_inside = temp_obj[key];
          if ("admin" in temp_inside) {
            temp_inside.send(
              JSON.stringify({
                message: "Somebody leave the room",
                status: 3,
              })
            );
          }
          if (ws == temp_inside) {
            index = i;
          }
        }
      }
      if (index != null) {
        activeGroups[roomID].splice(index, 1);
        console.log(activeGroups[roomID].length);
      }
    }
  } catch (error) {
    ws.send(
      JSON.stringify({
        message: "There was some problem----------------------",
        status: 0,
      })
    );
  }
};

const available_room = (ws) => {
  try {
    let available_room_id = [];
    for (let i in activeGroups) {
      available_room_id.push(parseInt(i));
    }
    ws.send(
      JSON.stringify({
        rooms: available_room_id,
        status: 4,
      })
    );
  } catch (error) {
    ws.send(
      JSON.stringify({
        message: "There was some problem----------------------",
        status: 0,
      })
    );
  }
};

wss.on("connection", (ws) => {
  try {
    ws.on("message", (recieveData) => {
      let data = JSON.parse(recieveData);
      const error = CheckParameters(data);
      if (!error) {
        console.log("error");
        ws.send(
          JSON.stringify({
            message: "check params",
            status: 0,
          })
        );
        return;
      }
      let { roomID, meta } = data;
      switch (meta) {
        case "create_group":
          CreateGroup(data, ws);
          console.log(activeGroups);
          break;

        case "join_room":
          joinRoom(data, ws);
          console.log(activeGroups);
          break;

        case "send_message":
          sendMessage(data, ws);
          console.log(activeGroups);
          break;

        case "show_all_rooms":
          ws.send(
            JSON.stringify({
              rooms: [activeGroups],
            })
          );
          break;
        default:
          ws.send(
            JSON.stringify({
              message: "Unsupported meta data provided provide valid data",
              status: 0,
            })
          );
          break;
      }
    });
    ws.on("close", (data) => {
      leaveRoom(ws, {
        roomID: ws.roomID,
        clientID: ws.clientID,
        message: "Leave request",
      });
      ws.terminate();
    });

    ws.on("pong", heartbeat);
  } catch (error) {
    ws.send(
      JSON.stringify({
        message: "there was some problem",
        status: 0,
      })
    );
  }
});
const interval = setInterval(function ping() {
  let a = wss.clients;
  wss.clients.forEach(function each(ws) {
    if (ws.isAlive === false) {
      leaveRoom(ws, { roomID: ws.roomID, clientID: ws.clientID });
      ws.terminate();
    }
    ws.isAlive = false;
    ws.ping(noop);
  });
}, 50000);

const serverFree = setInterval(() => {
  let removeKey = [];
  for (const obj in activeGroups) {
    if (activeGroups[obj].length < 1) {
      removeKey.push(obj);
    }
  }
  for (let i = 0; i < removeKey.length; i++) {
    delete activeGroups[removeKey[i]];
  }
}, 30000);
