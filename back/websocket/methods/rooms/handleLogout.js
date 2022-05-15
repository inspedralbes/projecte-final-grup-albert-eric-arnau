const handleLogout = async (username, activeGroups) => {
  Object.keys(activeGroups).forEach((group) => {
    const groupArray = Object.keys(activeGroups[group]);
    console.log("groupArray:", groupArray);
    for (let i = 0; i < groupArray.length; i++) {
      const currentUser = Object.keys(activeGroups[group][i])[0];
      if (currentUser === username) {
        // borrar de activeGroups el usuario
        delete activeGroups[group][i];
        console.log("activeGroups[group]", activeGroups[group]);
      }
    }
  });
};

export default handleLogout;
