import { WebSocketServer } from "ws";
import express from "express";
import router from "./api.js";

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
let groups = {};

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
  if (groupID in groups) {
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
  const currentGroup = groups[groupID];
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
    let { roomID, clientID } = data;
    const status = CheckGroup(roomID);
    if (status) {
      ws.send(
        JSON.stringify({
          message: "room already exist",
          status: 0,
        })
      );
    } else {
      groups[roomID] = [];
      let obj = {};
      obj[clientID] = ws;
      groups[roomID].push(obj);
      ws["roomID"] = roomID;
      ws["clientID"] = clientID;
      ws["admin"] = true;
      ws.send(
        JSON.stringify({
          message: "room created succesfully",
          status: 1,
        })
      );
      // TODO save group info in the database
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
    let { roomID, clientID } = data;
    // check if room exist or not
    const roomExist = roomID in groups;
    if (!roomExist) {
      ws.send(
        JSON.stringify({
          message: "Check room id",
          status: 0,
        })
      );
      return;
    }
    // const inRoom = insideRoomdataExist(rooms[roomID],clientID);
    const inRoom = CheckUserInGroup(roomID, ws, clientID);
    if (inRoom) {
      ws.send(
        JSON.stringify({
          message: "you are already in a room",
          status: 0,
        })
      );
    } else {
      let obj = {};
      obj[clientID] = ws;
      groups[roomID].push(obj);
      ws["roomID"] = roomID;
      ws["clientID"] = clientID;
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
        message: "there was some problem in joining a room",
        status: 0,
      })
    );
  }
};

// send message
const sendMessage = (data, ws, Status = null) => {
  try {
    let { roomID, message, clientID } = data;
    //check whether room exist or not
    const roomExist = roomID in groups;
    if (!roomExist) {
      ws.send(
        JSON.stringify({
          message: "Check room id",
          status: 0,
        })
      );
      return;
    }
    // check whether client is in room or not
    const clientExist = CheckUserInGroup(roomID, ws, clientID);
    if (!clientExist) {
      ws.send(
        JSON.stringify({
          message: "You are not allowed to send message",
          status: 0,
        })
      );
      return;
    }
    const room = groups[roomID];
    for (let i = 0; i < room.length; i++) {
      let user = room[i];
      for (let username in user) {
        let wsClientID = user[username];
        if (ws !== wsClientID) {
          wsClientID.send(
            JSON.stringify({
              user: clientID,
              message: message,
              status: Status ? Status : 1,
            })
          );
        }
      }
    }
    // TODO save message in database
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
    const roomExist = roomID in groups;
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
      delete groups[ws.roomID];
      return;
    } else {
      // find the index of object
      lst_obj = groups[roomID];
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
        groups[roomID].splice(index, 1);
        console.log(groups[roomID].length);
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
    for (let i in groups) {
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
        case "create_room":
          CreateGroup(data, ws);
          console.log(groups);
          break;

        case "join_room":
          joinRoom(data, ws);
          console.log(groups);
          break;

        case "send_message":
          sendMessage(data, ws);
          console.log(groups);
          break;

        case "show_all_rooms":
          ws.send(
            JSON.stringify({
              rooms: [groups],
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
  for (const obj in groups) {
    if (groups[obj].length < 1) {
      removeKey.push(obj);
    }
  }
  for (let i = 0; i < removeKey.length; i++) {
    delete groups[removeKey[i]];
  }
}, 30000);
