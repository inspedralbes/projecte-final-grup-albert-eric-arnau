import { checkParameters } from "../../methods/parameters/index.js";

const setFavouriteGroup = async (req, res) => {
  if (!checkParameters(req.body, keys.setFavouriteGroup))
    return res.status(400).json({ message: "Missing parameters" });

  const { userID, groupID } = req.body;
  const groupAdded = await favouriteGroup(groupID, userID);

  if (groupAdded.status)
    return res.status(groupAdded.status).json(groupAdded.message);

  return res.status(200).json({ message: "Group added to favourites" });
};

export default setFavouriteGroup;
