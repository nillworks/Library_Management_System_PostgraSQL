import express, { Request, Response, Application } from 'express';
import { globalErrorHandler } from './app/middleware/globalErrorHandler';
import { notFound } from './app/middleware/notFound';
import router from './app/routes';

const app: Application = express();
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'server is running!' });
});

// All users routes
app.use('/', router);

// global Error Handler and not found
app.use(globalErrorHandler);
app.use(notFound);

export default app;
