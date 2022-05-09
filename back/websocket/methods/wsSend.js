function wsSend(ws, message, status = 1) {
  ws.send(
    JSON.stringify({
      message,
      status,
    })
  );
}

export default wsSend;
