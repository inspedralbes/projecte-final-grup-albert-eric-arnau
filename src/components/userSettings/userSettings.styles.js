import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  wrapper: {
    width: "fit-content",
    height: "fit-content",
    display: "flex",
    marginInline: "auto",
    alignItems: "center",
  },
  image: {
    maxWidth: 200,
    maxHeight: 200,
  },
  editButton: {
    cursor: "pointer",
  },
  paper: {
    marginTop: 90,
    maxWidth: "fit-content",
    marginInline: "auto",
  },
}));
