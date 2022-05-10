import { createUser } from "../../../database/methods/user/index.js";

const register = async (req, res) => {
  const { email, name, username } = req.body;
  try {
    const user = await createUser(email, name, username);
    if (user.statusCode)
      return res
        .status(user.statusCode)
        .json({ message: "Error creating user" });

    return res.status(201).json({
      message: "User created successfully",
      user,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export default register;
