/* eslint-disable no-empty-function */
import { Request, Response } from 'express';
import AppError from '../errors/AppError';
import { BCryptHashProvider } from '../providers/HashProvider';
import { UsersRepository } from '../repositories/UsersRepository';

/**
 * @author: Gabriel de Moura e Souza.
 * @description - Classe controladora de usuários.
 * @inheritdoc - Classes controladoras devem ser inicializadas com a primeira letra maiúscula
 * e devem conter apenas os seguintes metodos:
 * @method [create] | @method [create] | @method [update] | @method [delete]
 */
class UserController {
  private hashProvider: BCryptHashProvider;

  constructor() {}

  async create(request: Request, response: Response) {
    const { name, email, password } = request.body;

    const usersRepository = new UsersRepository();

    const userAlreadyExist = await usersRepository.findByEmail(email);

    if (userAlreadyExist) {
      throw new AppError('This User Already Exists', 'DuplicityOfUsers');
    }

    this.hashProvider = new BCryptHashProvider();

    const encriptedPassword = await this.hashProvider.generateHash(password);

    const user = await usersRepository.create({
      name,
      email,
      password: encriptedPassword,
    });

    return response.json(user);
  }
}

export { UserController };
