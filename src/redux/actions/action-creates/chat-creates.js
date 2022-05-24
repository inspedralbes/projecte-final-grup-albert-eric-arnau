import { chatTypes } from "../action-types";

export const sendMessageAction = (message) => ({
  type: chatTypes.MESSAGE_SEND,
  payload: message,
});

/**
 * It takes an array of messages and returns an object with a type and a payload.
 * @param messages - an array of messages
 */
export const loadGroupMessagesAction = (messages) => ({
  type: chatTypes.MESSAGE_LOAD_GROUP_MESSAGES,
  payload: messages,
});

export const setActiveChatGroupAction = (groupID) => ({
  type: chatTypes.GROUP_SET_ACTIVE,
  payload: groupID,
});

export const receiveMessageAction = (message) => ({
  type: chatTypes.MESSAGE_RECEIVE,
  payload: message,
});

export const chatLogoutAction = () => ({
  type: chatTypes.CHAT_LOGOUT,
});
