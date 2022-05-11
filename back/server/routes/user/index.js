import express from "express";

import {
  register,
  getJoinedGroups,
  getProfileInfo,
  updateProfileInfo,
} from "../../controllers/user/index.js";
const router = express.Router();

// TODO: add middleware for authentication
router.post("/register", register);
router.get("/joined-groups/:id", getJoinedGroups);
router.get("/profile/:id", getProfileInfo);
router.put("/update-profile", updateProfileInfo);

export default router;
