import { chatTypes } from "../action-types";

export const sendMessage = (id, message) => ({
  type: chatTypes.MESSAGE_SEND,
  payload: {
    id,
    ...message,
  },
});
