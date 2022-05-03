import { Router } from "express";
import bodyParser from "body-parser";
const router = Router();

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.get("/", (req, res) => {
  res.send("API is working");
});

let groups = {};

const CheckGroup = (groupID) => {
  // check if group is already exist or not
  if (groupID in groups) {
    return true;
  } else {
    return false;
  }
};

// Create group
router.post("/create-group", (req, res) => {
  const { groupID, userID } = req.body;
  if (groupID && userID) {
    if (CheckGroup(groupID)) {
      res.send({
        status: "error",
        message: "Group already exist",
      });
    } else {
      groups[groupID] = {
        users: [userID],
        messages: [],
      };
      res.send({
        status: "success",
        message: "Group created successfully",
        groupStatus: groups,
      });
    }
  } else {
    res.send({
      status: "error",
      message: "Please provide groupID and userID",
    });
  }
});

export default router;
