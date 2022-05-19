import { Box, Center, Title } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDispatch } from "react-redux";
import { Form } from "./components";
import { loginThunk } from "../../redux/thunk/auth-thunk";

function Login() {
  const dispatch = useDispatch();

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    validate: {
      email: (value) =>
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)
          ? null
          : "Invalid email",
      password: (value) => {
        if (!value) return "Password is required";
        if (value.length < 6) return "Password must be at least 6 characters";
      },
    },
  });

  const login = () => {
    const { email, password } = form.values;
    dispatch(loginThunk(email, password));
  };
  return (
    <Center>
      <Box sx={{ width: "370px", height: "100%" }} my={50}>
        <Center>
          <img src="Icon.svg" alt="Logo empresa" width={100} />
        </Center>
        <Title order={1} align="center" p={30}>
          LOGIN
        </Title>
        <Form form={form} executeLogin={login} />
      </Box>
    </Center>
  );
}

export default Login;
