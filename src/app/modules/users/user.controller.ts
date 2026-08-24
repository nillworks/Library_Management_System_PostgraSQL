import { NextFunction, Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import { userServices } from './user.service';
import sendResponse from '../../utils/sendResponse';
import status from 'http-status';

const createUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await userServices.createUserIntoDB(req.body);
    sendResponse(res, {
      success: true,
      statusCode: status.OK,
      message: 'user created successfully',
      data: result,
    });
  },
);

export const userControllers = {
  createUser,
};
