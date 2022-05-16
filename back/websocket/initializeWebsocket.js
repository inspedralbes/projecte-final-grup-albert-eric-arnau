import { WebSocketServer } from "ws";

import { activeGroups } from "./groups.js";
import { handleSendMessage } from "./methods/messages/index.js";
import {
  handleCreateRoom,
  handleJoinRoom,
  handleLogout,
  createAndJoinRoom,
  joinRoom,
} from "./methods/rooms/index.js";
import {
  checkParameters,
  checkRoomExists,
  checkUserInRoom,
} from "./methods/checkers/index.js";
import { getAllUserGroupsInDatabase } from "../database/methods/user/index.js";

const initializeWebsocket = (port) =>
  new Promise((resolve, reject) => {
    const wss = new WebSocketServer({ port, host: "0.0.0.0" }, () => {
      resolve();
    });

    wss.on("connection", (ws) => {
      try {
        ws.on("message", async (receivedData) => {
          let data = JSON.parse(receivedData);

          if (data.meta === "connection") {
            const { userID, username } = data;

            const allUserGroupsID = await getAllUserGroupsInDatabase(userID);

            allUserGroupsID.forEach(async (groupID) => {
              if (!checkRoomExists(groupID, activeGroups)) {
                await createAndJoinRoom(ws, username, groupID, activeGroups);
              } else if (!checkUserInRoom(groupID, username, activeGroups)) {
                await joinRoom(ws, groupID, username, activeGroups);
              }
            });

            ws.send(
              JSON.stringify({
                meta: "info",
                message: activeGroups,
              })
            );

            return;
          } else if (data.meta === "logout") {
            const { username } = data;

            await handleLogout(username, activeGroups);
            console.log(
              "activeGroups después de logout completo:",
              activeGroups
            );
            // ws.close();

            return;
          } else if (!checkParameters(data)) {
            ws.send(
              JSON.stringify({
                meta: "error",
                message: "Unsupported parameters",
              })
            );
            return;
          }

          switch (data.meta) {
            case "send_message":
              await handleSendMessage(data, activeGroups);
              break;

            case "join_room":
              await handleJoinRoom(ws, data, activeGroups);
              break;

            case "create_room":
              await handleCreateRoom(ws, data, activeGroups);
              break;

            default:
              ws.send(
                JSON.stringify({
                  meta: "error",
                  message: "Unsupported meta data provided provide valid data",
                  status: 0,
                })
              );
              break;
          }
        });
        ws.on("close", () => {
          ws.send(
            JSON.stringify({
              meta: "info",
              message: "Closing connection",
            })
          );
          ws.terminate();
        });
      } catch (error) {
        ws.send(
          JSON.stringify({
            meta: "error",
            message: "there was some problem",
            status: 0,
          })
        );
      }
    });

    wss.on("error", (error) => {
      reject(error);
    });
  });

export default initializeWebsocket;
