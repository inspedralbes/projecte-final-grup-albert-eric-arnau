import { useStyles } from "./menu-link.styles";
import { UnstyledButton } from "@mantine/core";
import { Message, User, Settings, Selector } from "tabler-icons-react";
import { useNavigate } from "react-router-dom";
function MenuLink({ data }) {
  const navigate = useNavigate();
  const { label, icon: Icon, to } = data;
  const { classes } = useStyles();

  function handleClick() {
    navigate(to, { replace: true });
  }
  return (
    <UnstyledButton
      key={label}
      className={classes.mainLink}
      onClick={handleClick}>
      <div className={classes.mainLinkInner}>
        <Icon size={25} className={classes.mainLinkIcon} />
        <span>{label}</span>
      </div>
    </UnstyledButton>
  );
}

export default MenuLink;
