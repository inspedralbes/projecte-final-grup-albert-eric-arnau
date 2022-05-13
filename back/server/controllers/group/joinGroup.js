const joinGroup = async (req, res) => {
  const { id } = req.params;
  return res.status(200).json({ message: "Joined successfully" });
};

export default joinGroup;
