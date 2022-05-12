import express from "express";

import {
  createGroup,
  joinGroup,
  getPreviousMessages,
} from "../../controllers/group/index.js";
const router = express.Router();

router.post("/create", createGroup);
router.post("/:id/join", joinGroup);
router.get("/:id/messages", getPreviousMessages);

export default router;
