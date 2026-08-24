import { NextFunction, Request, Response } from 'express';

type TResponseData<T> = {
  success: boolean;
  statusCode: number;
  message: string;
  data: T;
  meta?: {
    page: number;

    total: number;
    totalPage: number;
  };
};

const sendResponse = <T>(res: Response, data: TResponseData<T>) => {
  const responsePayload = {
    success: data.success,
    statusCode: data.statusCode,
    message: data.message,
    data: data.data,
  };

  res.status(data.statusCode).json(responsePayload);
};

export default sendResponse;
