import createError from "http-errors";
import jwt from "jsonwebtoken";
import { finddocById } from "../services/auth.service.js";

async function authCHK(req, res, next) {
  try {
    const authoriz = req.headers.authorization;

    if (!authoriz) {
      throw createError([401], "unauthorization");
    }

    const token = authoriz.split(" ")[1];
    const payload = jwt.verify(token, process.env.JWT_SECRET, {
      algorithms: ["HS256"],
    });
    console.log("rr", payload);
    const docID = await finddocById(payload.username);
    if (!docID) {
      throw createError([401], "unauthorization");
    }
    req.doc = docID;
    console.log(docID);
    next();
  } catch (error) {
    next(error);
  }
}

export default authCHK;
