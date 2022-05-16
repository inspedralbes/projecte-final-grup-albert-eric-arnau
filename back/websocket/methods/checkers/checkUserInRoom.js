function checkUserInRoom(groupID, username, activeGroups) {
  const currentGroup = activeGroups[groupID];
  return currentGroup.some((user) => username in user);
}

export default checkUserInRoom;
