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
  Group,
  Indicator,
  ColorPicker,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { InfoCircle, Edit } from "tabler-icons-react";
import { useStyles } from "./userSettings.styles";
function UserSettings() {
  const { user } = useSelector((store) => store.auth);
  const { classes } = useStyles();

  //Validate Changes on user info
  var changes = false;
  function updateUserData() {
    if (form.values.username != user.username) {
      changes = true;
      console.log("username changed" + form.values.username);
    }
    if (form.values.description != user.description) {
      changes = true;
      console.log("description changed" + form.values.description);
      console.log(form.values.description);
      console.log(user.description);
    }
    if (form.values.color != user.color) {
      changes = true;
      console.log("color changed" + form.values.color);
    }
    if (changes) {
      console.log("changes");
    } else {
      console.log("no changes");
    }
  }

  const form = useForm({
    initialValues: {
      username: user.username,
      description: user.description,
      color: user.color ?? "#000000",
    },
    validate: {},
  });

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
            <Text component="label" size="sm" weight={500}>
              User ID :
            </Text>
            <Text component="p" size="sm" mt={0}>
              {user.name}
            </Text>
            <Text component="label" size="sm" weight={500}>
              Email :
            </Text>
            <Text component="p" size="sm" mt={0}>
              {user.email}
            </Text>
            <TextInput
              rightSection={displayName}
              label="Display name"
              placeholder="example_123"
              {...form.getInputProps("username")}
            />
          </div>
        </Grid.Col>
        <Grid.Col span={12}>
          <div className={classes.container}>
            <Textarea
              minRows={7}
              placeholder="Your description"
              label="Short description"
              {...form.getInputProps("description")}
            />
          </div>
        </Grid.Col>
        <Grid.Col span={12}>
          <Center>
            <Text weight={500} component="p" size="">
              PREVIEW:{" "}
              <Text
                component="span"
                size="lg"
                weight={500}
                color={form.values.color}>
                {form.values.username}
              </Text>
            </Text>
          </Center>
        </Grid.Col>
        <Grid.Col span={12}>
          <Center>
            <ColorPicker
              sx={{ minWidth: 600 }}
              defaultValue="#000000"
              withPicker={false}
              swatchesPerRow={14}
              format="hex"
              swatches={[
                "#25262b",
                "#868e96",
                "#fa5252",
                "#e64980",
                "#be4bdb",
                "#7950f2",
                "#4c6ef5",
                "#228be6",
                "#15aabf",
                "#12b886",
                "#40c057",
                "#82c91e",
                "#fab005",
                "#fd7e14",
              ]}
              {...form.getInputProps("color")}
            />
          </Center>
        </Grid.Col>
        <Grid.Col span={12}>
          <Center>
            <Button
              variant="gradient"
              gradient={{ from: "orange", to: "red" }}
              onClick={updateUserData}>
              Submit
            </Button>
          </Center>
        </Grid.Col>
      </Grid>
    </Paper>
  );
}

export default UserSettings;
