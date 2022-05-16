const handleLogout = (username, activeGroups) => {
  const allGroupsID = Object.keys(activeGroups);
  for (const groupID of allGroupsID) {
    const usersInGroup = activeGroups[groupID];
    activeGroups[groupID] = usersInGroup.filter(
      (user) => !user.hasOwnProperty(username)
    );
    if (activeGroups[groupID].length === 0) delete activeGroups[groupID];
  }
};

export default handleLogout;
