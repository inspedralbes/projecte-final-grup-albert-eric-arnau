import { Text, Title, TextInput, Button, Image } from "@mantine/core";
import { useStyles } from "./user-profile.styles";
function PublicUserProfile({ avatar, name, username, email }) {
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
          <Text size="sm" color="dimmed">
            {email}
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
