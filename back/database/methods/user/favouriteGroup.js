const favouriteGroup = async (groupID, userID) => {
  try {
    const user = await getUserDocument(userID);
    if (!user.status) return { status: 400, message: "User does not exist" };

    const favourites = user.data.favourites;
    if (favourites.includes(groupID))
      return { status: 400, message: "Group already in favourites" };

    favourites.push(groupID);
    await setDoc(doc(db, "users", userID), { favourites });

    return { message: "Group added to favourites" };
  } catch (error) {
    return { status: 500, message: error.message };
  }
};
