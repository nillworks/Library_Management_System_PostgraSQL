import { prisma } from '../../../lib/prisma';
import { IBook } from './books.interface';

const createBooksDB = async (payload: IBook) => {
  return prisma.book.create({
    data: payload,
  });
};

//* books category service
const createCategoryDB = async (payload: any) => {
  return prisma.category.create({
    data: payload,
  });
};

export const booksService = {
  createBooksDB,
  createCategoryDB,
};
