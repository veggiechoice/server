import { Router } from 'express';
import multer from 'multer';
import UserAvatarController from '../controllers/UserAvatarController';
import { UserController } from '../controllers/UserController';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import uploadConfig from '../config/upload';

const UserRouter = Router();
const userController = new UserController();
const userAvatarController = new UserAvatarController();

const upload = multer(uploadConfig);

UserRouter.post('/', userController.create);

UserRouter.use(ensureAuthenticated);

UserRouter.patch(
  '/avatar',
  upload.single('avatar'),
  userAvatarController.update,
);

export { UserRouter };
