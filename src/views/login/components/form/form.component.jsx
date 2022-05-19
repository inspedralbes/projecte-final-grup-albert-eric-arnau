import {
  Anchor,
  Button,
  Group,
  PasswordInput,
  Text,
  TextInput,
} from "@mantine/core";
import { Link } from "react-router-dom";
import PATHS from "../../../../routers/paths";

function Form({ form, executeLogin }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationEmail = form.validateField("email");
    const validationPassword = form.validateField("password");
    if (validationEmail.hasError || validationPassword.hasError) return;
    executeLogin();
  };
  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        label="Email"
        placeholder="your@email.com"
        {...form.getInputProps("email")}
      />
      {/* <====================== PASSWORD =======================> */}
      <Group position="apart" mb={5}>
        <Text component="label" htmlFor="password" size="sm" weight={500}>
          Password
        </Text>

        <Anchor
          component="a"
          href="#"
          onClick={(event) => event.preventDefault()}
          sx={(theme) => ({
            paddingTop: 2,
            color:
              theme.colors[theme.primaryColor][
                theme.colorScheme === "dark" ? 4 : 6
              ],
            fontWeight: 500,
            fontSize: theme.fontSizes.xs,
          })}>
          Forgot your password?
        </Anchor>
      </Group>
      <PasswordInput
        placeholder="********"
        {...form.getInputProps("password")}
      />
      <Button fullWidth type="submit" mt={10}>
        Login
      </Button>
      <Text weight={500} size="sm">
        <Link to={PATHS.REGISTER}>Create an account!</Link>
      </Text>
    </form>
  );
}

export default Form;
