import { Router } from 'express';
import { booksController } from './book.controller';

const router = Router();

router.post('/', booksController.createBooks);
export const booksRoutes = router;
