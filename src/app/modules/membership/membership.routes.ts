import { Router } from 'express';
import { membershipController } from './membership.controller';

const router = Router();

router.post('/', membershipController.createMembership);
export const membershipRoutes = router;
