const getAllData = (req, res) => {
  const search = req.params.search;
  console.log(search);

  res.status(200).json({
    ok: true,
    msg: "Hi there",
    search,
  });
};

module.exports = {
  getAllData,
};
