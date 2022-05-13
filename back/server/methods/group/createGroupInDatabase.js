import { saveGroup } from "../../../database/methods/group/index.js";

const createGroupInDatabase = async (data) => {
  try {
    const createdGroup = await saveGroup(data);
    return createdGroup;
  } catch (error) {
    return {
      message: error.message,
      status: 404,
    };
  }
};

export default createGroupInDatabase;
