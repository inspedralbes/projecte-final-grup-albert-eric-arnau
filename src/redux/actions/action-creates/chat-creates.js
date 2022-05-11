import { chatTypes } from "../action-types";

export const sendMessageAction = (message) => ({
  type: chatTypes.MESSAGE_SEND,
  message,
});
