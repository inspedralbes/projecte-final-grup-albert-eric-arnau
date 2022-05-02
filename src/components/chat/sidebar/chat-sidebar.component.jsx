import React from "react";
import { useStyles } from "./chat-sidebar.styles";

function ChatSideBar() {
  const { classes } = useStyles();
  return <div className={classes.navbar}></div>;
}

export default ChatSideBar;
