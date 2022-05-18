import { TextInput, Button, PasswordInput, Group, Text } from "@mantine/core";
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
      {/* <====================== USERNAME =======================> */}
      <TextInput
        label="Username"
        placeholder="Your username (ej. mangoloco)"
        {...form.getInputProps("username")}
      />
      {/* <====================== EMAIL =======================> */}
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
        {/* 
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
        </Anchor> */}
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
    </form>
  );
}

export default Form;
