function checkRoomExists(groupID, activeGroups) {
  console.log(groupID, activeGroups);
  if (groupID in activeGroups) return true;
  return false;
}

export default checkRoomExists;
