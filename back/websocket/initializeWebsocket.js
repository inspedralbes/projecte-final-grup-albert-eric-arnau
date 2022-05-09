import { WebSocketServer } from "ws";

const initializeWebsocket = (port) =>
  new Promise((resolve, reject) => {
    const server = new WebSocketServer({ port }, () => {
      resolve();
    });

    server.on("error", (error) => {
      reject(error);
    });
  });

export default initializeWebsocket;
