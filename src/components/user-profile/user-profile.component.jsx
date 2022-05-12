import { Text, Title, Image } from "@mantine/core";
import { useStyles } from "./user-profile.styles";
import { Mail } from "tabler-icons-react";
function PublicUserProfile({ avatar, name, username, email, description }) {
  const { classes } = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.body}>
        <Image src={avatar} className={classes.image} />
        <div>
          <Title className={classes.title}>{name}</Title>
          <Text weight={500} size="lg" mb={5}>
            {username}
          </Text>
          <Text size="sm">
            <Mail size={16} className={classes.icon} />
            {email}
          </Text>
          <Text size="sm" color="dimmed" className={classes.text}>
            {description}
          </Text>
        </div>

        {/* <div className={classes.controls}>
          <TextInput
            placeholder="Your email"
            classNames={{ input: classes.input, root: classes.inputWrapper }}
          />
          <Button className={classes.control}>Subscribe</Button>
        </div> */}
      </div>
    </div>
  );
}

export default PublicUserProfile;
