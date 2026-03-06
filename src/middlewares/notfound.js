export default function (req, res) {
  res.status(404);
  res.json({ msg: "not service" });
}
