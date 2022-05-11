function checkRoomExists(groupID, activeGroups) {
  return groupID in activeGroups;
}

export default checkRoomExists;
