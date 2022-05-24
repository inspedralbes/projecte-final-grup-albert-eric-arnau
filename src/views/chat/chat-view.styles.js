import { createStyles } from "@mantine/core";

export const useStyles = createStyles({
  chatContainer: {
    height: "90vh",
    border: "1px solid black",
    borderRadius: "15px",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    "&::-webkit-scrollbar": {
      border: "10px solid transparent",
      width: "10px",
      marginRight: "10px",
    },

    "&::-webkit-scrollbar-track": {
      borderRadius: "10px",
      backgroundColor: "#e1e1e1",
      marginBottom: "5px",
      marginTop: "5px",
    },

    "&::-webkit-scrollbar-thumb": {
      border: "1px solid #e1e1e1",
      borderRadius: "10px",
      backgroundColor: "#3ddbc1",
    },
  },
});
