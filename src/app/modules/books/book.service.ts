import { prisma } from '../../../lib/prisma';
import { IBook } from './books.interface';

const createBooksDB = async (payload: IBook) => {
  return prisma.book.create({
    data: payload,
  });
};

export const booksService = {
  createBooksDB,
};
