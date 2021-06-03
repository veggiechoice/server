/* eslint-disable no-empty-function */
import { Secret, sign } from 'jsonwebtoken';
import { Request, Response } from 'express';
import { classToPlain } from 'class-transformer';
import AppError from '../errors/AppError';
import { BCryptHashProvider } from '../providers/HashProvider';
import { UsersRepository } from '../repositories/UsersRepository';
import authConfig from '../config/auth';

/**
 * @author: Gabriel de Moura e Souza.
 * @description - Classe controladora de perfis de usuários.
 */
class SessionController {
  private hashProvider: BCryptHashProvider;

  constructor() {}

  public async create(request: Request, response: Response) {
    const { email, password } = request.body;
    const usersRepository = new UsersRepository();
    this.hashProvider = new BCryptHashProvider();

    const user = await usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError('No User was found with this e-mail', 'UserNotFound');
    }

    const passwordMatched = await this.hashProvider.compareHash(
      password,
      String(user.password),
    );

    if (!passwordMatched) {
      throw new AppError(
        'Email/password combination does not match',
        'UserNotFound',
      );
    }

    const { expiresIn, secret } = authConfig.jwt;

    const token = sign({}, secret as Secret, {
      subject: user.id,
      expiresIn,
    });

    // delete user.password;

    return response.json({ user: classToPlain(user), token });
  }
}

export { SessionController };
