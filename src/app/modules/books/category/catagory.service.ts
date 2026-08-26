import { prisma } from '../../../../lib/prisma';

//* books category service
const createCategoryDB = async (payload: any) => {
  return prisma.category.create({
    data: payload,
  });
};

export const categoryService = {
  createCategoryDB,
};
