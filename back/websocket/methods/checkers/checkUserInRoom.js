function checkUserInRoom(groupID, userID, activeGroups) {
  let userInRoom = false;
  const data = activeGroups[groupID];
  const currentGroup = activeGroups[groupID];
  for (let i = 0; i < currentGroup.length; i++) {
    let currentUser = data[i];
    for (const checkingUserID in currentUser) {
      if (userID === checkingUserID) {
        userInRoom = true;
        return;
      }
    }
  }
  if (!userInRoom) return false;
  return true;
}

export default checkUserInRoom;
