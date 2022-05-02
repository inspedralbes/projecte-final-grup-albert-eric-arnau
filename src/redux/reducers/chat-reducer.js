import { chatTypes } from "../action-types";

const initialState = [];

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case chatTypes.MESSAGE_SEND:
      return {
        payload: action.payload,
      };
    case chatTypes.MESSAGE_RECEIVE:
      return {
        user: state.user,
        message: state.message,
        time: state.time,
        imgLink: state.imgLink,
      };
    case chatTypes.RECEIVE_MESSAGES:
      return {
        ...state,
      };
    case chatTypes.default:
      return state;
  }
};
export default chatReducer;
