import {
  Button,
  Center,
  Grid,
  Paper,
  Text,
  Textarea,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useSelector } from "react-redux";
import { useStyles } from "./create-group.styles";

function CreateGroup() {
  const { classes } = useStyles();
  const { user } = useSelector((store) => store.auth);

  const handleCreateGroup = () => {
    const { name, description, limit, password } = form.values;
    console.log(description);
    console.log(name);
    console.log(limit);
    console.log(password);
  };

  const form = useForm({
    initialValues: {
      name: "",
      description: "",
      limit: "",
      image: "",
      password: "",
    },
  });
  return (
    <Paper shadow="xl" radius="md" className={classes.paper}>
      <Grid gutter={40} className={classes.wrapper}>
        <Grid.Col span={12}>
          <Text>Name</Text>
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
          <Text>Security password (leave empty for a public group)</Text>
          <TextInput
            type="password"
            placeholder="Ex: wearegamers"
            {...form.getInputProps("password")}
          />
          <Text>Description</Text>
          <Textarea
            placeholder="Ex: This is a group for people who like to play games"
            {...form.getInputProps("description")}
          />
        </Grid.Col>
      </Grid>
      <Center>
        <Button
          className={classes.submit}
          onClick={handleCreateGroup}
          variant="gradient"
          gradient={{ from: "orange", to: "red" }}>
          Create group
        </Button>
      </Center>
    </Paper>
  );
}

export default CreateGroup;
