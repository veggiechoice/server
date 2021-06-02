import { Request, Response } from 'express';
import { FindAdressByCepService } from '../services/FindAdressByCepService';

/**
 * @author: Gabriel de Moura e Souza.
 * @description - Classe controladora de perfis de usuários.
 */
class CepController {
  public async get(request: Request, response: Response) {
    const { cep } = request.params;
    const findAdressByCepService = new FindAdressByCepService();

    const address = await findAdressByCepService.execute(cep);
    return response.json(address);
  }
}

export { CepController };
