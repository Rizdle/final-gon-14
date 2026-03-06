export const docData = (req, res) => {
  const docData = req.doc;
  res.status(200).json(docData);
};
