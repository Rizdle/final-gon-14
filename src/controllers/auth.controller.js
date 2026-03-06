import createError from "http-errors";
import { findUserByUname, findUserByUser } from "../services/auth.service.js";
import bcrypt from "bcrypt";

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

// export async function loginDocCTRL(req, res, next) {}

///////////////////////////////////////////////////////////////

export async function registerUserCTRL(req, res, next) {
  const { username, password } = req.body;
  try {
    const doc = await findUserByUser(username);
    if (doc) {
      throw createError(400, "email already exist");
    }
    const hashPassword = await bcrypt.hash(password, 5);
    const newUser2 = await createNewUser(username, hashPassword);
    console.log(newUser2);
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
