const getUsers = (req, res) => {
  res.status(200).json({
    ok: true,
    users: [],
  });
};

module.exports = { getUsers };
