import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const Users = {
  create: async (data: any) => {
    return prisma.user.create({ data });
  },
};
export default Users;
