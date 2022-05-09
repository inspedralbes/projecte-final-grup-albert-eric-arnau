import express from "express";

import { createGroup } from "../../controllers/group/index.js";
const router = express.Router();

router.post("/create", createGroup);

export default router;
