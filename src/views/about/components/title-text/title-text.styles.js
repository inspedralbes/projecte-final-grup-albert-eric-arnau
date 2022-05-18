import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  container: {
    paddingBottom: theme.spacing.xl * 6,
  },

  title: {
    marginTop: "150px",
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    marginBottom: theme.spacing.md,
    textAlign: "center",

    [theme.fn.smallerThan("sm")]: {
      fontSize: 28,
    },

    description: {
      textAlign: "center",
    },
  },
}));
