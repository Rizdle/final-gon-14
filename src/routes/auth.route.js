import express from "express";

import {
  registerDocCTRL,
  registerUserCTRL,
} from "../controllers/auth.controller.js";
const authRoute = express.Router();

authRoute.post("/register/doctor", registerDocCTRL);
authRoute.post("/register/user", registerUserCTRL);
// authRoute.get("/register/doctor", registerDocCTRL);

// authRoute.post("/auth/register/user",registerU);

export default authRoute;
