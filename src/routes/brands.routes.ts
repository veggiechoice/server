import { Router } from 'express';
import { BrandsController } from '../controllers/BrandsController';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const BrandsRouter = Router();
const brandsController = new BrandsController();

BrandsRouter.post('/', brandsController.create);
BrandsRouter.get('/', brandsController.index);
BrandsRouter.delete('/:id', brandsController.delete);
BrandsRouter.put('/:id', brandsController.update);
BrandsRouter.use(ensureAuthenticated);

export { BrandsRouter };