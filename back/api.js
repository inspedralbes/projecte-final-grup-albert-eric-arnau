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

router.get("/group-info", (req, res) => {
  console.log(req.body);
  res.send("get group-info");
});

router.get("/joined-groups", (req, res) => {
  console.log(req.body);
  res.send("get joined-groups");
});

router.post("/join-group", (req, res) => {
  console.log(req.body);
  res.send("post join-group");
});

router.post("/leave-group", (req, res) => {
  console.log(req.body);
  res.send("post leave-group");
});

router.put("/update-group-info", (req, res) => {
  console.log(req.body);
  res.send("put update-group-info");
});

router.get("/user-fav-groups", (req, res) => {
  console.log(req.body);
  res.send("get user-fav-groups");
});

router.get("/user-info", (req, res) => {
  console.log(req.body);
  res.send("get user-info");
});

router.put("/user-info", (req, res) => {
  console.log(req.body);
  res.send("put user-info");
});

router.get("/messages", (req, res) => {
  console.log(req.body);
  res.send("get get-messages");
});

router.post("/save-message", (req, res) => {
  console.log(req.body);
  res.send("post save-message");
});

// TODO: funcion para hacer busqueda de grupos desde group-finder
router.get("/group", (req, res) => {
  console.log(req.body);
  res.send("get group");
});

export default router;
