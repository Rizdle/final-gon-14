import express from "express";

import {
  registerDocCTRL,
  registerUserCTRL,
  loginController,
  loginUserController,
} from "../controllers/auth.controller.js";

import authCHK from "../middlewares/author.misddleware.js";
import { docData } from "../controllers/get.controller.js";
const authRoute = express.Router();

authRoute.post("/register/doctor", registerDocCTRL);
authRoute.post("/register/user", registerUserCTRL);
authRoute.post("/login/doctor", loginController);
authRoute.post("/login/user", loginUserController);
authRoute.get("/doctors/me", authCHK, docData);

// authRoute.get("/register/doctor", registerDocCTRL);

// authRoute.post("/auth/register/user",registerU);

export default authRoute;
