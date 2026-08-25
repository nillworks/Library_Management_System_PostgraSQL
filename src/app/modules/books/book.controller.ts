import { NextFunction, Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import { booksService } from './book.service';
import sendResponse from '../../utils/sendResponse';
import status from 'http-status';

const createBooks = catchAsync(
  async (req: Request, res: Response, Next: NextFunction) => {
    const result = await booksService.createBooksDB(req.body);

    sendResponse(res, {
      success: true,
      statusCode: status.OK,
      message: 'Book created successfully',
      data: result,
    });
  },
);

export const booksController = {
  createBooks,
};
