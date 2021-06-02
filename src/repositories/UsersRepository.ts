import { classToPlain } from 'class-transformer';
import { getRepository, Repository } from 'typeorm';
import { User } from '../models/User';

interface IUser {
  name: string;
  email: string;
  password: string;
}

/**
 * @author: Gabriel de Moura e Souza.
 * @description - Classe de repositorio de Usuários.
 */
class UsersRepository {
  private ormRepository: Repository<User> = getRepository(User);

  constructor() {
    this.ormRepository = getRepository(User);
  }

  public async findByEmail(email: string) {
    const user = await this.ormRepository.findOne({
      email,
    });

    return classToPlain(user) || null;
  }

  public async findById(id: string) {
    const user = await this.ormRepository.findOne({
      where: { id },
    });

    return user || null;
  }

  public async findByPk(id: string) {
    const user = await this.ormRepository.findByIds([id]);

    return classToPlain(user) || null;
  }

  public async create({ name, email, password }: IUser) {
    const user = this.ormRepository.create({
      name,
      password,
      email,
    });

    await this.save(user);
    return user;
  }

  public async save(user: User) {
    return this.ormRepository.save(user);
  }

  public async deleteOne(id: string) {
    return this.ormRepository.delete(id);
  }
}

export { UsersRepository };
