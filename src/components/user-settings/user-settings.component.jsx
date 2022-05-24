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
  ColorPicker,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { Dropzone, MIME_TYPES } from "@mantine/dropzone";

import { useDispatch, useSelector } from "react-redux";
import { InfoCircle, CloudUpload } from "tabler-icons-react";
import { updateUserThunk } from "../../redux/thunk/auth-thunk";
import { useStyles } from "./user-settings.styles";
import { useState } from "react";
import { getStorage, ref } from "firebase/storage";

function UserSettings() {
  const { user } = useSelector((store) => store.auth);
  const { classes } = useStyles();
  const dispatch = useDispatch();
  const [storageReference, setStorageReference] = useState(null);
  const [storageImage, setStorageImage] = useState(null);
  const storage = getStorage();

  //Validate Changes on user info
  var changes = false;
  function updateUserData() {
    if (form.values.name !== user.name) {
      changes = true;
    }
    if (form.values.description !== user.description) {
      changes = true;
    }
    if (form.values.color !== user.color) {
      changes = true;
    }
    if (form.values.image !== user.avatar) {
      changes = true;
    }
    if (changes) {
      dispatch(
        updateUserThunk(
          user.uid,
          user.email,
          form.values.name,
          user.username,
          form.values.description,
          form.values.color,
          storageReference,
          storageImage
        )
      );
    } else {
      console.log("no changes");
    }
  }

  const form = useForm({
    initialValues: {
      name: user.name,
      description: user.description,
      color: user.color ?? "#000000",
      image: user.avatar,
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
                inline
                label={
                  <Dropzone
                    onDrop={async (image) => {
                      const [file] = image;
                      if (file) {
                        form.setFieldValue("image", URL.createObjectURL(file));
                        const storageRef = ref(
                          storage,
                          `users/${file.name + Date.now()}`
                        );
                        setStorageReference(storageRef);
                        setStorageImage(file);
                      }
                    }}
                    onReject={() => {
                      console.log("rejected");
                    }}
                    accept={[
                      MIME_TYPES.jpeg,
                      MIME_TYPES.png,
                      MIME_TYPES.gif,
                      MIME_TYPES.webp,
                    ]}
                    maxSize={1000000}>
                    {(status) => (
                      <Button sx={{ width: "100%" }}>
                        <CloudUpload size={24} />
                      </Button>
                    )}
                  </Dropzone>
                }
                size={0}>
                <Image
                  src={form.values.image}
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
              User ID:
            </Text>
            <Text component="p" size="sm" mt={0}>
              {user.username}
            </Text>
            <Text component="label" size="sm" weight={500}>
              Email:
            </Text>
            <Text component="p" size="sm" mt={0}>
              {user.email}
            </Text>
            <TextInput
              rightSection={displayName}
              label="Display name"
              placeholder="example_123"
              {...form.getInputProps("name")}
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
                {form.values.name}
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
