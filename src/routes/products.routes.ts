import { Router } from 'express';
import multer from 'multer';
import { ProductsController } from '../controllers/ProductsController';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import uploadConfig from '../config/upload';

const ProductsRoutes = Router();
const productsController = new ProductsController();
const upload = multer(uploadConfig);

ProductsRoutes.use(ensureAuthenticated);
ProductsRoutes.post('/', upload.array('images'), productsController.create);
ProductsRoutes.get('/', productsController.index);
ProductsRoutes.get('/:id', productsController.show);

export { ProductsRoutes };
