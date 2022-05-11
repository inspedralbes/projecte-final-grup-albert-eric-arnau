import { chatTypes } from "../actions";

const initialState = {
  activeGroupID: null,

  messages: [],
};

const chatReducer = (state = initialState, action) => {
  let newState;
  const { type, payload: message } = action;

  switch (type) {
    case chatTypes.MESSAGE_SEND:
    case chatTypes.MESSAGE_RECEIVE:
      newState = [...state, message];
      break;
    default:
      newState = [...state];
      break;
  }
  return newState;
};
export default chatReducer;
