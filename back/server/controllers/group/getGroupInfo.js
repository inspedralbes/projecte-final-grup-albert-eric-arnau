import { getGroupDocument } from "../../../database/methods/group/index.js";
import { getUserDocument } from "../../../database/methods/user/index.js";
import { referencesToId } from "../../../database/methods/transforms/index.js";

const getGroupInfo = async (req, res) => {
  const groupID = req.params.idGroup;

  const groupInfo = await getGroupDocument(groupID);

  if (groupInfo.status)
    return res.status(groupInfo.status).send({ message: groupInfo.message });

  let members = [];
  const membersId = referencesToId(groupInfo.members);
  groupInfo.password = undefined;
  const { username: admin } = await getUserDocument(groupInfo.admin.id);

  try {
    members = await Promise.all(
      membersId.map(async (id) => {
        const { username } = await getUserDocument(id);
        return username;
      })
    );
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Error getting admin or members info" });
  }

  const groupInfoToSend = {
    ...groupInfo,
    members,
    admin,
  };

  return res.status(200).json(groupInfoToSend);
};

export default getGroupInfo;
