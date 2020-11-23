import { Router } from 'express';

import linksRouter from './links.routes';

const routes = Router();

routes.use('/links', linksRouter);

export default routes;
