import { getAllUserGroupsInDatabase } from "../../../database/methods/user/index.js";

const getUserGroups = async (req, res) => {
  const userID = req.params.id;
  const allUserGroupsID = await getAllUserGroupsInDatabase(userID);

  if (allUserGroupsID.status)
    return res.status(allUserGroupsID.status).json(allUserGroupsID);

  return res.status(200).json(allUserGroupsID);
};

export default getUserGroups;
