import express from "express";

import {
  getGroupInfo,
  createGroupInDatabase,
  joinGroupInDatabase,
  leaveGroupInDatabase,
  getPreviousMessages,
} from "../../controllers/group/index.js";
const router = express.Router();

router.get("/:idGroup", getGroupInfo);

router.post("/create", createGroupInDatabase);
router.post("/:idGroup/join", joinGroupInDatabase);
router.delete("/:idGroup/leave", leaveGroupInDatabase);
router.get("/:idGroup/messages", getPreviousMessages);

export default router;
