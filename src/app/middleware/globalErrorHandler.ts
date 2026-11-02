type Request = unknown;
type Response = {
  status(code: number): { json(body: unknown): unknown };
};
type NextFunction = (error?: unknown) => void;

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

  res.status(500).json({
    success: false,
    stack: err.stack,
    message: errorMessage,
    error: err,
  });
};
