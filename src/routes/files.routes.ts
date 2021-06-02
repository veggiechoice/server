import { Router } from 'express';
import { FilesController } from '../controllers/FilesController';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const FilesRouter = Router();
const filesController = new FilesController();

FilesRouter.post('/', filesController.create);
FilesRouter.get('/', filesController.index);
FilesRouter.delete('/:id', filesController.delete);
FilesRouter.put('/:id', filesController.update);
FilesRouter.use(ensureAuthenticated);

export { FilesRouter };
