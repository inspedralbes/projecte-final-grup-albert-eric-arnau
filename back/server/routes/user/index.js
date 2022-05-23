import express from "express";

import {
  register,
  getProfileInfo,
  updateProfileInfo,
  setFavouriteGroup,
  getUserGroups,
} from "../../controllers/user/index.js";
const router = express.Router();

// AUTH
router.post("/register", register);

// PROFILE
router.get("/:id", getProfileInfo);
router.get("/:id/load-groups", getUserGroups);
router.put("/:id/set-favourite-group", setFavouriteGroup);
router.put("/update-profile", updateProfileInfo);

export default router;
