import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  wrapper: {
    width: "80%",
    height: "fit-content",
    display: "flex",
    marginInline: "auto",
    alignItems: "center",
  },

  paper: {
    marginTop: 90,
    maxWidth: "80%",
    marginInline: "auto",
  },

  submit: {
    marginBlock: "20px",
  },
}));
