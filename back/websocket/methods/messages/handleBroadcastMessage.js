const handleBroadcastMessage = (ws, groupID, name, message, activeGroups) => {
  try {
    const group = activeGroups[groupID];
    for (let i = 0; i < group.length; i++) {
      let user = group[i];
      for (let username in user) {
        let wsUserID = user[username];
        if (ws !== wsUserID) {
          wsUserID.send(
            JSON.stringify({
              user: name,
              message: message,
              status: 200,
            })
          );
        }
      }
    }
    // TODO: save the message in the database
    // SaveMessage(groupID, userID, message);
  } catch (error) {
    console.log(error.message);
  }
};

export default handleBroadcastMessage;
