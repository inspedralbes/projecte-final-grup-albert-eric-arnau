import { createStyles } from "@mantine/core";
import React from "react";

const useStyles = createStyles({
  navbar: {
    height: "100vh",
    width: "300px",
    // TODO: borrar background color
    backgroundColor: "red",
  },
});

function ChatSideBar() {
  const { classes } = useStyles();
  return <div className={classes.navbar}></div>;
}
export default ChatSideBar;
