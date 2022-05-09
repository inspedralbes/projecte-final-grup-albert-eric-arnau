function checkUserInRoom(groupID, userID, activeGroups) {
  const currentGroup = activeGroups[groupID];
  for (let i = 0; i < currentGroup.length; i++) {
    let currentUser = data[i];
    for (const checkingUserID in currentUser) {
      if (userID == checkingUserID) {
        return true;
      }
    }
  }
  return false;
}

export default checkUserInRoom;
