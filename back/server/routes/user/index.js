import express from "express";

import {
  register,
  getProfileInfo,
  updateProfileInfo,
  setFavouriteGroup,
} from "../../controllers/user/index.js";
const router = express.Router();

// AUTH
router.post("/register", register);

// PROFILE
router.get("/:id", getProfileInfo);
router.put("/:id/set-favourite-group", setFavouriteGroup);
// router.put("/update-profile", updateProfileInfo);

export default router;
