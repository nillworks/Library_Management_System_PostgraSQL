import { NextFunction, Request, Response } from 'express';
import { status } from 'http-status';

export const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  let errorMessage = 'An unexpected error occurred';

  if (err.message) {
    if (err.code === 'P2002') {
      errorMessage = 'Already Exist';
    }
  }

  res.status(status.INTERNAL_SERVER_ERROR).json({
    success: false,
    stack: err.stack,
    message: errorMessage,
    error: err,
  });
};
