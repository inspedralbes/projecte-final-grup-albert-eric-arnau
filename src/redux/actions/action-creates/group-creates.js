import { groupTypes } from "../action-types";

export const loadAllGroups = (groups) => ({
  type: groupTypes.GROUP_LOAD_ALL,
  payload: groups,
});

export const setActiveGroup = (group) => ({
  type: groupTypes.GROUP_SET_ACTIVE,
  payload: group,
});

export const addGroup = (group) => ({
  type: groupTypes.GROUP_ADD,
  payload: group,
});

export const updateGroup = (group) => ({
  type: groupTypes.GROUP_UPDATE,
  payload: group,
});

export const deleteGroup = (group) => ({
  type: groupTypes.GROUP_DELETE,
  payload: group,
});

export const exitGroup = (group) => ({
  type: groupTypes.GROUP_EXIT,
  payload: group,
});

export const groupLogoutAction = () => ({
  type: groupTypes.GROUP_LOGOUT,
});
