import { createUser } from "../../../database/methods/index.js";

function register() {
  return async (req, res) => {
    const { email, name, username } = req.body;

    const user = await createUser(email, name, username);

    if (user.statusCode)
      return res
        .status(user.statusCode)
        .json({ message: "Error creating user" });

    res.status(201).json({
      message: "User created successfully",
      user,
    });
  };
}

export default register;
