import {
  TextInput,
  Tooltip,
  Center,
  Image,
  Text,
  Grid,
  Button,
  Paper,
  Textarea,
  Indicator,
} from "@mantine/core";
import { InfoCircle, Edit } from "tabler-icons-react";
import { useStyles } from "./userSettings.styles";
function UserSettings() {
  const { classes } = useStyles();
  const username = (
    <Tooltip
      label="Your unique username"
      placement="end"
      withArrow
      transition="pop-bottom-right">
      <Text color="dimmed" sx={{ cursor: "help" }}>
        <Center>
          <InfoCircle size={18} />
        </Center>
      </Text>
    </Tooltip>
  );
  const displayName = (
    <Tooltip
      label="The name other useres will see"
      placement="end"
      withArrow
      transition="pop-bottom-right">
      <Text color="dimmed" sx={{ cursor: "help" }}>
        <Center>
          <InfoCircle size={18} />
        </Center>
      </Text>
    </Tooltip>
  );
  const email = (
    <Tooltip
      label="Email address"
      placement="end"
      withArrow
      transition="pop-bottom-right">
      <Text color="dimmed" sx={{ cursor: "help" }}>
        <Center>
          <InfoCircle size={18} />
        </Center>
      </Text>
    </Tooltip>
  );
  const password = (
    <Tooltip
      label="Your password"
      placement="end"
      withArrow
      transition="pop-bottom-right">
      <Text color="dimmed" sx={{ cursor: "help" }}>
        <Center>
          <InfoCircle size={18} />
        </Center>
      </Text>
    </Tooltip>
  );

  return (
    <Paper shadow="xl" radius="md" className={classes.paper}>
      <Grid gutter={40} className={classes.wrapper}>
        <Grid.Col span={6}>
          <div className={classes.container}>
            <center>
              <Indicator
                position="bottom-end"
                color="orange"
                inline
                label={<Edit className={classes.editButton} />}
                size={30}>
                <Image
                  src="https://www.disponalencasa.com/pub/media/catalog/product/cache/4025f56c98cb88143bb53de4d18da868/m/o/monster-juice-mango-loco.jpg"
                  className={classes.image}
                  radius="xl"
                />
              </Indicator>
            </center>
          </div>
        </Grid.Col>
        <Grid.Col span={6}>
          <div className={classes.container}>
            <Textarea
              placeholder="Your description"
              label="Short description"
            />
          </div>
        </Grid.Col>
        <Grid.Col span={6}>
          <div className={classes.container}>
            <TextInput
              rightSection={username}
              label="@username"
              placeholder="@example"
            />
            <TextInput
              rightSection={displayName}
              label="Display name"
              placeholder="example_123"
            />
          </div>
        </Grid.Col>
        <Grid.Col span={6}>
          <div className={classes.container}>
            <TextInput
              rightSection={email}
              label="Email"
              placeholder="123@example.com"
            />
            <TextInput
              rightSection={password}
              label="Password"
              placeholder="******"
            />
          </div>
        </Grid.Col>
        <Grid.Col span={12}>
          <center>
            <Button variant="gradient" gradient={{ from: "orange", to: "red" }}>
              Submit
            </Button>
          </center>
        </Grid.Col>
      </Grid>
    </Paper>
  );
}

export default UserSettings;
