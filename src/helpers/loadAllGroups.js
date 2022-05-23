export const loadAllGroups = async () => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/group/all-groups`
    );
    if (response.ok) {
      const groups = await response.json();
      return groups;
    }
    return response.status;
  } catch (err) {
    throw new Error(err);
  }
};
