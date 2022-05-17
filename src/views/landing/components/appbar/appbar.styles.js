import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  logo: {
    width: "150px",
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  login: {
    width: "150px",
    [theme.fn.smallerThan("sm")]: {
      width: "100px",
    },
  },

  inner: {
    height: 60,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  mobileBarContainer: {
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    textDecoration: "none",
    color: "black",
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,
    minWidth: "120px",

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
    [theme.fn.smallerThan("sm")]: {
      marginInline: "auto",
      marginBlock: "10px",
      fontSize: "1.2rem",
      height: "50px",
      width: "60%",
    },
  },

  linkLabel: {
    marginRight: 5,
  },
}));
