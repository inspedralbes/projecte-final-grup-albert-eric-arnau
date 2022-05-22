import { groupTypes } from "../actions";

const initialState = {
  groups: [],
  activeGroup: null,
};

const groupReducer = (state = initialState, action) => {
  let newState;
  const { type, payload } = action;

  switch (type) {
    case groupTypes.GROUP_LOAD_ALL:
      newState = { ...state, groups: [payload] };
      break;
    case groupTypes.GROUP_SET_ACTIVE:
      newState = { ...state, activeGroup: payload };
    default:
      newState = { ...state };
      break;
  }
  return newState;
};
export default groupReducer;
