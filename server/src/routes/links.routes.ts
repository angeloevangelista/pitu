import { Router } from 'express';

import LinksController from '../controllers/LinksController';

const linksRouter = Router();

linksRouter.post('/', LinksController.create);

linksRouter.get('/:url_code', LinksController.show);

linksRouter.get('/:url_code/stats', LinksController.stats);

export default linksRouter;
