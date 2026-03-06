import { prisma } from "../config/prismaClient.js";

export const findUserByUname = async (username) => {
  const doc = await prisma.doctor.findFirst({
    where: { username: username },
  });
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
