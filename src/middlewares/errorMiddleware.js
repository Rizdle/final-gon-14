export default function (err, req, res, next) {
  console.log("!!!ERROR!!!");
  console.log(err.message);
  res.status(err.status || 500);
  res.status({ err: err.message });
}
