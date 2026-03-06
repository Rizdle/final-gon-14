import { prisma } from "../config/prismaClient.js";
import jwt from "jsonwebtoken";

export const findUserByUname = async (username) => {
  console.log(username);
  const doc = await prisma.doctor.findFirst({
    where: { username: username },
  });
  console.log(doc);
  return doc;
};

export const createUser = async (username, hashPassword, specialization) => {
  console.log(username, hashPassword, specialization);

  const newDoc = await prisma.doctor.create({
    data: {
      username,
      password: hashPassword,
      specialization,
    },
  });
  return newDoc;
};

//////////////////////////////////////////////////////////////////////////////////////

export const findUserByUser = async (username) => {
  const userI = await prisma.user.findFirst({
    where: { username: username },
  });
  return userI;
};

export const createNewUser = async (username, hashPassword) => {
  const newUser = await prisma.user.create({
    data: {
      username,
      password: hashPassword,
    },
  });
  return newUser;
};

/////////////////////////////////////////////////////////////////
export const createToken = async (user) => {
  const payload = {
    username: user.username,
    password: user.password,
  };
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    algorithm: "HS256",
    expiresIn: "1d",
  });
  return token;
};

export const findUByUser = async (username) => {
  const userI = await prisma.user.findFirst({
    where: { username: username },
  });
  return userI;
};
//////////////////////////////////////////////////////////////

export const finddocById = async (username) => {
  const DocI = await prisma.doctor.findFirst({
    where: { username: username },
  });
  return DocI;
};
