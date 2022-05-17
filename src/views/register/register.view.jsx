import { Button, Group, Stepper, Center, Box, Title } from "@mantine/core";
import { useState } from "react";
import { AppareanceForm, Form } from "./components";
function Register() {
  const [active, setActive] = useState(1);
  const nextStep = () =>
    setActive((current) => (current < 2 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

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
            <Form next={nextStep} />
          </Stepper.Step>
          <Stepper.Step allowStepSelect={active > 1}>
            <AppareanceForm />
          </Stepper.Step>
          <Stepper.Completed>
            Completed, click back button to get to previous step
          </Stepper.Completed>
        </Stepper>
        <Group position="center" mt="xl">
          <Button variant="default" onClick={prevStep}>
            Back
          </Button>
          <Button onClick={nextStep}>Next step</Button>
        </Group>
      </Box>
    </Center>
  );
}

export default Register;
