import { chatTypes } from "../actions";

const initialState = {
  activeGroupID: null,

  messages: [],
};

const chatReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case chatTypes.MESSAGE_SEND:
      newState = [...state, action.message];
      break;
    default:
      newState = [...state];
      break;
  }
  return newState;
};
export default chatReducer;
