function checkRoomExists(groupID, activeGroups) {
  console.log("activeGroups antes de checkGroupExists", activeGroups);
  if (groupID in activeGroups) return true;
  return false;
}

export default checkRoomExists;
