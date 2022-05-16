const initializeServer = (app, port) =>
  new Promise((resolve, reject) => {
    const server = app.listen({ port, host: "0.0.0.0" }, () => {
      resolve();
    });

    server.on("error", (error) => {
      reject(error);
    });
  });

export default initializeServer;
