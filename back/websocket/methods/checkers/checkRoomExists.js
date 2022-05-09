function checkRoomExists(groupID, activeGroups) {
  if (groupID in activeGroups) true;
  return false;
}

export default checkRoomExists;
