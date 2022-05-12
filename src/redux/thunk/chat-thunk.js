import { loadGroupMessagesAction } from "../actions/action-creates/chat-creates";
// TODO: LOAD LAZY LOADING MESSAGES FROM SERVER
export const loadGroupMessagesThunk = (groupID) => {
  return async (dispatch) => {
    try {
      let messages = [];
      let response = await fetch(
        `${process.env.REACT_APP_API_URL}/group/${groupID}/messages`
      );
      if (response.status === 200) {
        messages = await response.json();
        console.log(messages);
        dispatch(loadGroupMessagesAction(messages));
      }
    } catch (err) {
      console.log(err);
    }
  };
};
