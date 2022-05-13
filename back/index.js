import { default as app } from "./server/index.js";
import initializeServer from "./server/initializeServer.js";
import initializeWebsocket from "./websocket/initializeWebsocket.js";

const apiPort = +process.env.PORT || 7894;
const wsPort = +process.env.PORT + 1 || 7895;

(async () => {
  try {
    await initializeWebsocket(wsPort).catch((error) => {
      console.log("Error al iniciar el websocket:", error.message);
      throw new Error();
    });

    await initializeServer(app, apiPort).catch((error) => {
      console.log("Error al iniciar el servidor:", error.message);
      throw new Error();
    });

    console.log("Servidor iniciado en:", apiPort);
    console.log("Websocket iniciado en:", wsPort);
  } catch (error) {
    console.log("Exit with error: ", error);
    process.exit(1);
  }
})();
