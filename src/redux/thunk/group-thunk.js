export const loadAllGroupsThunk = (UserID) => {
  return async (dispatch) => {
    try {
      await fetch(
        `${process.env.REACT_APP_API_URL}/user/${UserID}/load-groups`
      );
    } catch (err) {}
  };
};

export const joinGroupThunk = (idGroup, UserID, password) => {
  return async (dispatch) => {
    try {
      await fetch(`${process.env.REACT_APP_API_URL}/group/${idGroup}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userID: UserID,
          password: password,
        }),
      });
    } catch (err) {}
  };
};

export const leaveGroupThunk = (idGroup, UserID) => {
  return async (dispatch) => {
    try {
      await fetch(`${process.env.REACT_APP_API_URL}/group/${idGroup}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userID: UserID,
        }),
      });
    } catch (err) {}
  };
};

export const deleteGroupThunk = (idGroup, UserID) => {
  return async (dispatch) => {
    try {
      await fetch(`${process.env.REACT_APP_API_URL}/group/${idGroup}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userID: UserID,
        }),
      });
    } catch (err) {}
  };
};

export const createGroupThunk = (name, UserID) => {
  return async (dispatch) => {
    try {
      await fetch(`${process.env.REACT_APP_API_URL}/group`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          userID: UserID,
        }),
      });
    } catch (err) {}
  };
};
