import { createUser } from "../../../database/methods/user/index.js";

const register = async (req, res) => {
  const { uid, email, name, username, color } = req.body;
  const user = await createUser(uid, email, name, username, color);

  if (user.status) return res.status(user.status).json(user.message);

  return res.status(201).json(user);
};

export default register;
