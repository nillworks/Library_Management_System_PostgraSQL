import { NextFunction, Request, Response } from 'express';
import catchAsync from '../../../utils/catchAsync';
import { categoryService } from './catagory.service';
import sendResponse from '../../../utils/sendResponse';
import status from 'http-status';

const createCategory = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await categoryService.createCategoryDB(req.body);

    sendResponse(res, {
      success: true,
      statusCode: status.OK,
      message: 'Category created successfully',
      data: result,
    });
  },
);

export const categoryController = {
  createCategory,
};
