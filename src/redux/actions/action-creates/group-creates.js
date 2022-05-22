import { groupTypes } from "../action-types";

export const loadAllGroups = (groups) => ({
  type: groupTypes.GROUP_LOAD_ALL,
  payload: groups,
});

export const setActiveGroup = (group) => ({
  type: groupTypes.GROUP_SET_ACTIVE,
  payload: group,
});
