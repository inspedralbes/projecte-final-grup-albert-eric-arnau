import { TextInput, Button, PasswordInput, Group, Text } from "@mantine/core";
import { Link } from "react-router-dom";
import PATHS from "../../../../routers/paths";
function Form({ form, next }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationUsername = form.validateField("username");
    const validationEmail = form.validateField("email");
    const validationPassword = form.validateField("password");
    const validationConfirmPassword = form.validateField("confirmPassword");
    if (
      validationUsername.hasError ||
      validationEmail.hasError ||
      validationPassword.hasError ||
      validationConfirmPassword.hasError
    )
      return;
    next();
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* <====================== EMAIL =======================> */}
      <TextInput
        label="Email"
        placeholder="your@email.com"
        {...form.getInputProps("email")}
      />
      {/* <====================== USERNAME =======================> */}
      <TextInput
        label="Username"
        placeholder="Your username (ej. mangoloco)"
        {...form.getInputProps("username")}
      />
      {/* <====================== PASSWORD =======================> */}
      <Group position="apart" mb={5}>
        <Text component="label" htmlFor="password" size="sm" weight={500}>
          Password
        </Text>
      </Group>
      <PasswordInput
        placeholder="********"
        {...form.getInputProps("password")}
      />
      {/* <====================== CONFIRM PASSWORD =======================> */}
      <Group position="apart" mb={5}>
        <Text component="label" htmlFor="password" size="sm" weight={500}>
          Confirm password
        </Text>
      </Group>
      <PasswordInput
        placeholder="********"
        {...form.getInputProps("confirmPassword")}
      />
      {/* <====================== SUBMIT =======================> */}
      <Button type="submit" fullWidth mt={10}>
        Continue
      </Button>
      <Text weight={500} size="sm" mt={10}>
        Already have an account? <Link to={PATHS.LOGIN}>Log in!</Link>
      </Text>
    </form>
  );
}

export default Form;
