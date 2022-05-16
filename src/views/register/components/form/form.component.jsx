import { useForm } from "@mantine/form";
import {
  TextInput,
  Checkbox,
  Button,
  PasswordInput,
  Group,
  Text,
} from "@mantine/core";
import { useEffect } from "react";
function Form({ next }) {
  const form = useForm({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      imAdult: false,
    },

    validate: {
      username: (value) => {
        if (!value) return "Username is required";
        if (value.length < 5) return "Username must be at least 5 characters";
        if (!/^[a-zA-Z0-9_]+$/.test(value))
          return "Username can only contain letters, numbers and underscores";
      },
      email: (value) =>
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)
          ? null
          : "Invalid email",
      password: (value, { confirmPassword }) => {
        if (!value) return "Password is required";
        if (value.length < 6) return "Password must be at least 6 characters";
        if (value !== confirmPassword) return true;
      },
      confirmPassword: (value, { password }) => {
        if (!value) return "Password is required";
        if (value.length < 6) return "Password must be at least 6 characters";
        if (value !== password) return "Passwords does not match";
      },
    },
  });
  const handleSubmit = () => {
    const validation = form.validate();
    console.log(validation);
    if (!validation.hasErrors) {
      next();
    }
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
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
      <Checkbox
        mt="md"
        label="I agree to sell my privacy"
        {...form.getInputProps("termsOfService", { type: "checkbox" })}
      />
      {/* <====================== SUBMIT =======================> */}
      <Button type="submit" fullWidth mt={10}>
        Submit
      </Button>
    </form>
  );
}

export default Form;
