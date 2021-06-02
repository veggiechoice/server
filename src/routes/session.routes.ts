import { Router } from 'express';
import { SessionController } from '../controllers/SessionsController';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const SessionRouter = Router();
const sessionController = new SessionController();

SessionRouter.post('/', sessionController.create);
SessionRouter.use(ensureAuthenticated);

export { SessionRouter };
