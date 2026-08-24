import { prisma } from '../../../lib/prisma';

const createUserIntoDB = async (payload: any) => {
  const result = await prisma.user.create({
    data: payload,
  });

  return result;
};

export const userServices = {
  createUserIntoDB,
};
