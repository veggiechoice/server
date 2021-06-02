/* eslint-disable no-empty-function */
import { Request, Response } from 'express';
import AppError from '../errors/AppError';
import { BCryptHashProvider } from '../providers/HashProvider';
import { UsersRepository } from '../repositories/UsersRepository';

/**
 * @author: Gabriel de Moura e Souza.
 * @description - Classe controladora de perfis de usuários.
 */
class ProfileController {
  private hashProvider: BCryptHashProvider;

  constructor() {}

  public async update(request: Request, response: Response) {
    const { id } = request.user;
    const { name, email, password, old_password, address } = request.body;

    this.hashProvider = new BCryptHashProvider();
    const usersRepository = new UsersRepository();
    const user = await usersRepository.findById(id);

    if (!user) {
      throw new AppError('No User was found with this e-mail', 'UserNotFound');
    }

    const userWithUpdatedEmail = await usersRepository.findByEmail(email);

    if (userWithUpdatedEmail) {
      throw new AppError('This e-mail is already in use', 'DuplicityOfUsers');
    }

    if (name) {
      user.name = name;
    }

    if (email) {
      user.email = email;
    }

    if (address) {
      user.address = address;
    }

    if (password && !old_password) {
      throw new AppError('Old password is not defined', 'PasswordRequired');
    }

    if (password && old_password) {
      const checkOldPassword = await this.hashProvider.compareHash(
        old_password,
        String(user.password),
      );

      if (!checkOldPassword) {
        throw new AppError('Old password does not match');
      }

      user.password = await this.hashProvider.generateHash(password);
    }

    const newUser = await usersRepository.save(user);
    return response.json(newUser);
  }

  public async show(request: Request, response: Response) {
    const { id } = request.user;

    const usersRepository = new UsersRepository();

    const user = await usersRepository.findByPk(id);

    if (!user) {
      throw new AppError('Canot Find this user');
    }

    delete user.password;
    return response.json(user);
  }

  public async destroy(request: Request, response: Response) {
    const { id } = request.user;

    const usersRepository = new UsersRepository();

    await usersRepository.deleteOne(id);

    return response.send();
  }
}

export { ProfileController };
