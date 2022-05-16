import { chatTypes } from "../actions";

const initialState = {
  activeGroupID: null,

  messages: [],
};

const chatReducer = (state = initialState, action) => {
  let newState;
  const { type, payload } = action;

  switch (type) {
    case chatTypes.MESSAGE_SEND:
      newState = { ...state, messages: [...state.messages, payload] };
      break;
    case chatTypes.MESSAGE_LOAD_GROUP_MESSAGES:
      newState = { ...state, messages: [...payload] };
      break;
    default:
      newState = { ...state };
      break;
  }
  return newState;
};
export default chatReducer;
