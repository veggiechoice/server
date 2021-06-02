import { Router } from 'express';
import { PlacesController } from '../controllers/PlacesController';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const PlacesRouter = Router();
const placesController = new PlacesController();

PlacesRouter.post('/', placesController.create);
PlacesRouter.get('/', placesController.index);
PlacesRouter.delete('/:id', placesController.delete);
PlacesRouter.put('/:id', placesController.update);
PlacesRouter.use(ensureAuthenticated);

export { PlacesRouter };
