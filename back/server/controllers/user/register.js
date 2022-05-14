import { createUser } from "../../../database/methods/user/index.js";
import { checkParameters, keys } from "../../methods/parameters/index.js";

const register = async (req, res) => {
  if (!checkParameters(req.body, keys.register))
    return res.status(400).json({ message: "Missing parameters" });

  const { userID, email, name, username, color } = req.body;

  const user = await createUser(userID, email, name, username, color);

  if (user.status) return res.status(user.status).json(user.message);

  return res.status(201).json(user);
};

export default register;
