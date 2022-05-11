import { createUser } from "../../../database/methods/user/index.js";

const register = async (req, res) => {
  const { email, name, username } = req.body;
  const user = await createUser(email, name, username);
  if (user.status) return res.status(user.status).json(user.message);

  return res.status(201).json(user);
};

export default register;
