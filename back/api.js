// router imports
import { Router } from "express";
import bodyParser from "body-parser";
import { Register, test } from "./firebase/services.js";
const router = Router();

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.get("/", (req, res) => {
  res.send("API is working");
});

let groups = {};

// Create group
router.post("/create-user", (req, res) => {
  const { email, username, name, password } = req.body;
  Register(email, password);

  // if (groupID && userID) {
  //   if (CheckGroup(groupID)) {
  //     res.send({
  //       status: "error",
  //       message: "Group already exist",
  //     });
  //   } else {
  //     groups[groupID] = {
  //       users: [userID],
  //       messages: [],
  //     };
  //     res.send({
  //       status: "success",
  //       message: "Group created successfully",
  //       groupStatus: groups,
  //     });
  //   }
  // } else {
  //   res.send({
  //     status: "error",
  //     message: "Please provide groupID and userID",
  //   });
  // }
});

export default router;
