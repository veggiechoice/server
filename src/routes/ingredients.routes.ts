import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '../config/upload';
import { IngredientsController } from '../controllers/IngredientsController';
import { RecognizeController } from '../controllers/RecognizeController';

import UploadImage from '../middlewares/uploadImage';

const IngredientRouter = Router();
const ingredientsController = new IngredientsController();
const recognizeController = new RecognizeController();

const upload = multer(uploadConfig);

IngredientRouter.get('/', ingredientsController.index);
IngredientRouter.post(
  '/scan',
  upload.single('ingredients'),
  UploadImage,
  recognizeController.index,
);
IngredientRouter.get('/:id', ingredientsController.show);

export { IngredientRouter };
