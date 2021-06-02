import { Router } from 'express';
import { CategoriesController } from '../controllers/CategoriesController';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const CategoriesRouter = Router();
const categoriesController = new CategoriesController();

CategoriesRouter.post('/', categoriesController.create);
CategoriesRouter.get('/', categoriesController.index);
CategoriesRouter.use(ensureAuthenticated);

export { CategoriesRouter };
