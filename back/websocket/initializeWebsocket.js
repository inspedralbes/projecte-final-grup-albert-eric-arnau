import { WebSocketServer } from "ws";
import { handleSendMessage } from "./methods/messages/index.js";
import { activeGroups } from "./groups.js";

const initializeWebsocket = (port) =>
  new Promise((resolve, reject) => {
    const wss = new WebSocketServer({ port }, () => {
      resolve();
    });

    wss.on("connection", (ws) => {
      try {
        ws.on("message", (recieveData) => {
          let data = JSON.parse(recieveData);
          switch (data.meta) {
            case "send_message":
              handleSendMessage(data, ws, activeGroups);
              break;

            case "join_room":
              // handleJoinRoom(data, ws, activeGroups);
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
        ws.on("close", () => {
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

    wss.on("error", (error) => {
      reject(error);
    });
  });

export default initializeWebsocket;
