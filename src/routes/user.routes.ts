import { Router } from 'express';
import { UserController } from '../controllers/UserController';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const UserRouter = Router();
const userController = new UserController();

UserRouter.post('/', userController.create);
UserRouter.use(ensureAuthenticated);

export { UserRouter };
