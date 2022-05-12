import { WebSocketServer } from "ws";
import { activeGroups } from "./groups.js";
import { handleSendMessage } from "./methods/messages/index.js";
import { handleJoinRoom } from "./methods/rooms/index.js";
import { handleCreateRoom } from "./methods/rooms/index.js";
import { checkParameters } from "./methods/checkers/index.js";

const initializeWebsocket = (port) =>
  new Promise((resolve, reject) => {
    const wss = new WebSocketServer({ port, host: "0.0.0.0" }, () => {
      resolve();
    });

    wss.on("connection", (ws) => {
      try {
        ws.on("message", (receivedData) => {
          let data = JSON.parse(receivedData);

          if (data.meta === "connection") return;

          if (data.meta && !checkParameters(data)) {
            console.log("Invalid parameters provided");
            return;
          }

          switch (data.meta) {
            case "send_message":
              handleSendMessage(ws, data, activeGroups);
              break;

            case "join_room":
              handleJoinRoom(ws, data, activeGroups);
              break;

            case "create_room":
              handleCreateRoom(ws, data, activeGroups);
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
