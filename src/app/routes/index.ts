import { Router } from 'express';
import { userRoutes } from '../modules/users/user.routes';
import { membershipRoutes } from '../modules/membership/membership.routes';

const router = Router();

const routes = [
  {
    path: '/users',
    route: userRoutes,
  },

  {
    path: '/membership',
    route: membershipRoutes,
  },
];

routes.forEach(route => router.use(route.path, route.route));

export default router;
