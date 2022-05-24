const handleBroadcastMessage = (
  groupID,
  userID,
  name,
  username,
  message,
  time,
  imgLink,
  color,
  activeGroups
) => {
  try {
    const group = activeGroups[groupID];
    group.forEach((user) => {
      const [key, wsUser] = Object.entries(user).flat();
      if (key === username) return;
      wsUser.send(
        JSON.stringify({
          meta: "receive_message",
          userID,
          groupID,
          name,
          time,
          username,
          imgLink,
          message,
          color,
        })
      );
    });
  } catch (error) {
    console.log(error.message);
  }
};

export default handleBroadcastMessage;
