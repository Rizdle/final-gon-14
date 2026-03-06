import createHttpError from "http-errors";
import { prisma } from "../config/prismaClient.js";
import {
  findUserByUname,
  findUserByUser,
  createUser,
  createNewUser,
  createToken,
} from "../services/auth.service.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function registerDocCTRL(req, res, next) {
  const { username, password, specialization } = req.body;
  try {
    const doc = await findUserByUname(username);
    if (doc) {
      throw createError(400, "email already exist");
    }
    const hashPassword = await bcrypt.hash(password, 5);
    const newUser = await createUser(username, hashPassword, specialization);
    console.log(newUser);
    res.status(201).json({
      message: "Register Success",
      user: {
        id: newUser.id,
        username: newUser.username,
        password: newUser.password,
        specialization: newUser.specialization,
      },
    });
  } catch (error) {
    next(error);
  }
}

///////////////////////////////////////////////////////////////

export async function registerUserCTRL(req, res, next) {
  try {
    const doc = await findUserByUser(username);
    if (doc) {
      throw createError(400, "email already exist");
    }
    const hashPassword = await bcrypt.hash(password, 5);
    const newUser2 = await createNewUser(username, hashPassword);
    res.status(201).json({
      message: "Register Success",
      user: {
        id: newUser2.id,
        username: newUser2.username,
        password: newUser2.password,
      },
    });
  } catch (error) {
    next(error);
  }
}

///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
export async function loginController(req, res, next) {
  const { username, password } = req.body;
  console.log(req.body);
  try {
    const user = await findUserByUname(username);
    console.log(user);
    const isMatch = await bcrypt.compare(password, user.password);

    if (!user || !isMatch) {
      throw createError(401, "Invalid credentials");
    }
    const token = await createToken(user);
    res.status(201).json({
      message: "Login Success",
      token: token,
      user: {
        username: user.username,
        password: user.password,
      },
    });
  } catch (error) {
    next(error);
  }
}
