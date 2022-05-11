import express from "express";

import {
  createGroup,
  joinGroup,
  getPreviousMessages,
} from "../../controllers/group/index.js";
const router = express.Router();

router.post("/create", createGroup);
router.post("/join", joinGroup);
router.post("/previous-messages", getPreviousMessages);

export default router;
