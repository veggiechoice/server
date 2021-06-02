import { Router } from 'express';
import { AdressController } from '../controllers/AdressController';
import { CepController } from '../controllers/CepController';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const AdressRouter = Router();
const adressController = new AdressController();
const cepController = new CepController();

AdressRouter.use(ensureAuthenticated);
// AdressRouter.get('/:id', profileController.show);
AdressRouter.post('/', adressController.create);
AdressRouter.get('/cep/:cep', cepController.get);

export { AdressRouter };
