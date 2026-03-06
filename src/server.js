import "dotenv/config";
import express from "express";
import authRoute from "./routes/auth.route.js";
import createErrors from "./middlewares/errorMiddleware.js";
import notfound from "./middlewares/notfound.js";

const app = express();
const PORT = process.env.port;

app.use(express.json());

app.use("/auth", authRoute);
// app.use("/auth/register/user", authRoute);
app.use(createErrors);
app.use(notfound);

app.listen(PORT, () => {
  console.log(`server start is running at http://localhost:${PORT}`);
});
