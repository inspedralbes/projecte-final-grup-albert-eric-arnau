import {
  Button,
  ColorPicker,
  Grid,
  Group,
  Text,
  TextInput,
} from "@mantine/core";
import { MessageBox } from "../message-box";

function AppareanceForm({ form, createUser, next, prev }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationDisplayName = form.validateField("displayName");
    if (validationDisplayName.hasError) return;
    createUser();
    next();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextInput
          label="Display name"
          placeholder="Your name to display (max 20 characters)"
          {...form.getInputProps("displayName")}
        />
        <Group position="apart" spacing={0} mt={10}>
          <Text component="label" htmlFor="colorPicker" size="sm" weight={500}>
            Color display
          </Text>
          <ColorPicker
            fullWidth
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
        </Group>
        <MessageBox
          messageData={{
            time: 1652782796786,
            name: form.values?.displayName
              ? form.values?.displayName
              : "xX_NiceName_Xx",
            message: "Wow this is a cool chat message",
            color: form.values?.color,
          }}
        />
        <Grid>
          <Grid.Col span={6}>
            <Button variant="default" fullWidth onClick={() => prev()} mt={10}>
              Back
            </Button>
          </Grid.Col>
          <Grid.Col span={6}>
            <Button fullWidth type="submit" mt={10}>
              Create
            </Button>
          </Grid.Col>
        </Grid>
      </form>
    </>
  );
}

export default AppareanceForm;
