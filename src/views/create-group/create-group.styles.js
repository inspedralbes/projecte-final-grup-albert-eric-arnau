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

  button: {
    display: "flex",
    width: "100%",
    border: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[3]
    }`,
    borderRadius: theme.radius.sm,
    padding: theme.spacing.lg,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[0],
    },
  },
}));
