import { Stepper, Center, Box, Title, Button } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerThunk } from "../../redux/thunk/auth-thunk";
import { AppareanceForm, Form } from "./components";
function Register() {
  const [active, setActive] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const nextStep = () =>
    setActive((current) => (current < 2 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  const form = useForm({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      displayName: "",
      color: "#000000",
    },
    validate: {
      username: (value) => {
        if (!value) return "Username is required";
        if (value.length < 5) return "Username must be at least 5 characters";
        if (value.length > 20) return "Username must less than 20 characters";
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
      displayName: (value) => {
        if (!value) return "Name is required";
        if (value.length < 5) return "Name must be at least 5 characters";
        if (value.length > 20) return "Name must be less than 20 characters";
        if (!/^[a-zA-Z0-9_]+$/.test(value))
          return "Name can only contain letters, numbers and underscores";
      },
    },
  });

  const createUser = () => {
    const { username, email, password, displayName, color } = form.values;
    dispatch(registerThunk(username, email, displayName, password, color));
  };

  return (
    <Center>
      <Box sx={{ width: "370px", height: "100%" }} my={50}>
        <Center>
          <img src="Icon.svg" alt="Logo empresa" width={100} />
        </Center>
        <Title order={1} align="center" p={30}>
          REGISTER
        </Title>
        <Stepper active={active} onStepClick={setActive} size="sm">
          <Stepper.Step allowStepSelect={active > 0}>
            <Form form={form} next={nextStep} />
          </Stepper.Step>
          <Stepper.Step allowStepSelect={active > 1}>
            <AppareanceForm
              form={form}
              createUser={createUser}
              next={nextStep}
              prev={prevStep}
            />
          </Stepper.Step>
          <Stepper.Completed>
            <Center mt={20}>
              <Title order={2}> User created correctly!</Title>
            </Center>
            <Button
              fullWidth
              mt={20}
              onClick={() => {
                navigate({ pathname: "/chat" });
              }}>
              Finish!
            </Button>
          </Stepper.Completed>
        </Stepper>
      </Box>
    </Center>
  );
}

export default Register;
