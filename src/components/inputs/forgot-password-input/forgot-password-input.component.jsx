import { PasswordInput, Text, Group, Anchor } from "@mantine/core";
import { useState } from "react";

function ForgotPasswordInput({
  className,
  style,
  label = "Label",
  placeholder = "placeholder...",
  id,
  value,
  onChange,
  ...others
}) {
  return (
    <div className={className} style={style}>
      <Group position="apart" mb={5}>
        <Text component="label" htmlFor={id} size="sm" weight={500}>
          {label}
        </Text>

        <Anchor
          component="a"
          href="#"
          onClick={() => console.log("Not implemented yet")}
          sx={(theme) => ({
            paddingTop: 2,
            color:
              theme.colors[theme.primaryColor][
                theme.colorScheme === "dark" ? 4 : 6
              ],
            fontWeight: 500,
            fontSize: theme.fontSizes.xs,
          })}>
          {" "}
          ¿Te has olvidado de tu contraseña?
        </Anchor>
      </Group>
      <PasswordInput
        placeholder={placeholder}
        id={id}
        value={value}
        onChange={onChange}
        {...others}
      />
    </div>
  );
}
export default ForgotPasswordInput;
