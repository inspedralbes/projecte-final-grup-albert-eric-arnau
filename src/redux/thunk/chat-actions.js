import { chatTypes } from "../action-types/chat-types";

export const sendMessage = (message) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    const newMessage = {
      user: `users/${uid}`,
      message: message,
      imgLink: "",
    };
    dispatch(activeEntry(doc.id, newEntry));
    dispatch(addNewEntry(doc.id, newEntry));
  };
};

export const receiveMessage = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    const dbRef = collection(db, uid, "journal/notes");
    const doc = await getDoc(dbRef);

    dispatch(activeEntry(doc.id, doc.data));
  };
};
