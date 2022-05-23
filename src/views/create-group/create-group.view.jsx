import {
  Button,
  Center,
  Grid,
  Paper,
  Text,
  Textarea,
  Checkbox,
  TextInput,
  UnstyledButton,
  Stack,
  Group,
} from "@mantine/core";
import { Dropzone, MIME_TYPES } from "@mantine/dropzone";
import { useForm } from "@mantine/form";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CloudUpload } from "tabler-icons-react";
import { createGroupThunk } from "../../redux/thunk/group-thunk";
import { useStyles } from "./create-group.styles";

function CreateGroup() {
  const { classes } = useStyles();
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const dropzoneRef = useRef();

  const handleCreateGroup = () => {
    const { name, description, limit, password = "", isPublic } = form.values;
    const imgLink = "";
    dispatch(
      createGroupThunk(user.uid, name, password, limit, imgLink, description)
    );
  };

  const form = useForm({
    initialValues: {
      name: "",
      description: "",
      limit: "",
      image: "",
      isPublic: false,
      password: "",
    },
  });

  return (
    <Paper shadow="xl" radius="md" className={classes.paper}>
      <Grid gutter={40} className={classes.wrapper}>
        <Grid.Col span={4}>
          <Dropzone
            openRef={dropzoneRef}
            onDrop={() => {}}
            className={classes.dropzone}
            radius="md"
            accept={[
              MIME_TYPES.jpeg,
              MIME_TYPES.png,
              MIME_TYPES.gif,
              MIME_TYPES.webp,
            ]}
            maxSize={30 * 1024 ** 2}>
            {(status) => (
              <div style={{ pointerEvents: "none" }}>
                <Group position="center">
                  <CloudUpload size={50} />
                </Group>
                <Text align="center" weight={700} size="lg" mt="xl">
                  {status.accepted
                    ? "Drop files here"
                    : status.rejected
                    ? "File too heavy"
                    : "Upload image"}
                </Text>
                <Text align="center" size="sm" mt="xs" color="dimmed">
                  Drop an image here to upload it. We can accept only{" "}
                  <i>png, jpg, gif and webp</i> files that are less than 1mb in
                  size.
                </Text>
              </div>
            )}
          </Dropzone>
        </Grid.Col>
        <Grid.Col span={8}>
          <Stack>
            <Text>Group name</Text>
            <TextInput
              placeholder="Ex: Gamers unite"
              {...form.getInputProps("name")}
            />
            <Text>Members limit</Text>
            <TextInput
              placeholder="Ex: 5"
              type="number"
              {...form.getInputProps("limit")}
            />
            <Text>Description</Text>
            <Textarea
              placeholder="Ex: This is a group for people who like to play games"
              {...form.getInputProps("description")}
            />
            <UnstyledButton className={classes.button} tabIndex={-1}>
              <Checkbox
                {...form.getInputProps("isPublic")}
                size="md"
                mr="xl"
                styles={{ input: { cursor: "pointer" } }}
              />
              <Text>Is a public group?</Text>
            </UnstyledButton>
            {!form.values.isPublic ? (
              <>
                <Text>Security password</Text>
                <TextInput
                  type="password"
                  placeholder="Ex: wearegamers"
                  {...form.getInputProps("password")}
                />
              </>
            ) : null}
          </Stack>
          <Center>
            <Button
              className={classes.submit}
              onClick={handleCreateGroup}
              variant="gradient"
              gradient={{ from: "orange", to: "red" }}>
              Create group
            </Button>
          </Center>
        </Grid.Col>
      </Grid>
    </Paper>
  );
}

export default CreateGroup;
