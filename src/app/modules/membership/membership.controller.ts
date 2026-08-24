import { NextFunction, Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import { membershipService } from './membership.service';
import sendResponse from '../../utils/sendResponse';
import status from 'http-status';

const createMembership = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await membershipService.createMembershipDB(req.body);

    sendResponse(res, {
      success: true,
      statusCode: status.OK,
      message: 'Membership created successfully',
      data: result,
    });
  },
);

export const membershipController = {
  createMembership,
};
