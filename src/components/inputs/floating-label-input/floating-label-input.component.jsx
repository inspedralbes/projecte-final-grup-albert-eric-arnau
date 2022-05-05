import { useState } from "react";
import { TextInput } from "@mantine/core";
import { useStyles } from "./floating-label-input.styles.js";

function FloatingLabelInput({
  label = "Label",
  placeholder = "placeholder...",
  required = false,
}) {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");
  const { classes } = useStyles({
    floating: value.trim().length !== 0 || focused,
  });

  return (
    <TextInput
      label={label}
      placeholder={placeholder}
      required={required}
      classNames={classes}
      value={value}
      onChange={(event) => setValue(event.currentTarget.value)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      mt="md"
      autoComplete="nope"
    />
  );
}

export default FloatingLabelInput;
