import { useStyles } from "./menu-link.styles";
import { UnstyledButton } from "@mantine/core";
import { Message, User, Settings, Selector } from "tabler-icons-react";
function MenuLink({ data }) {
  const { label, icon: Icon } = data;
  const { classes } = useStyles();
  return (
    <UnstyledButton key={label} className={classes.mainLink}>
      <div className={classes.mainLinkInner}>
        <Icon size={25} className={classes.mainLinkIcon} />
        <span>{label}</span>
      </div>
    </UnstyledButton>
  );
}

export default MenuLink;
