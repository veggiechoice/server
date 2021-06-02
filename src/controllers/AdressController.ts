import { Request, Response } from 'express';

/**
 * @author: Gabriel de Moura e Souza.
 * @description - Classe controladora de perfis de usuários.
 */
class AdressController {
  constructor() {}

  public async create(request: Request, response: Response) {
    return response.json();
  }
}

export { AdressController };
