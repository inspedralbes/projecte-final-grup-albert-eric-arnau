import { createStyles } from "@mantine/core";

export const useStyles = createStyles({
  message: {
    width: "fit-content",
    maxWidth: "70%",
    padding: "10px",
  },
  localMessage: {
    width: "fit-content",
    maxWidth: "70%",
    padding: "10px",
    background: "linear-gradient(90deg, #fd7e14 0%, #fa5252 100%)",
    color: "#fff",
    overflowWrap: "break-word",
  },
  timeLocalMessage: {
    display: "flex",
    color: "#fff",
    justifyContent: "flex-end",
  },
});
