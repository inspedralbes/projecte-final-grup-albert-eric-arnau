import { getDownloadURL, uploadBytes } from "firebase/storage";
import {
  addGroup,
  loadAllGroups,
} from "../actions/action-creates/group-creates";

export const loadAllUserGroupsThunk = (UserID) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/user/${UserID}/load-groups`
      );
      if (response.ok) {
        const groups = await response.json();
        dispatch(loadAllGroups(groups));
      }
      return response.status;
    } catch (err) {}
  };
};

export const joinGroupThunk = (group, UserID, password) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/group/${group.id}/join`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userID: UserID,
            password: password,
          }),
        }
      );
      if (response.ok) {
        const groupJoined = await response.json();
        dispatch(addGroup(groupJoined));
      }
      return response.status;
    } catch (err) {
      console.log(err);
    }
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

export const createGroupThunk = (
  admin,
  name,
  password,
  limit,
  description,
  imageRef,
  imageToUpload
) => {
  return async (dispatch) => {
    try {
      await uploadBytes(imageRef, imageToUpload);
      const imageURL = await getDownloadURL(imageRef);

      const newGroup = {
        admin,
        name,
        password,
        limit,
        imgLink: imageURL,
        description,
      };
      const respose = await fetch(
        `${process.env.REACT_APP_API_URL}/group/create`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newGroup),
        }
      );
      if (respose.ok) {
        const group = await respose.json();
        console.log(group);
        dispatch(addGroup(group));
      }
      return respose.status;
    } catch (err) {}
  };
};
