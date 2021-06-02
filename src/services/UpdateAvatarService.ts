/* eslint-disable no-unused-vars */
import AppError from '../errors/AppError';
import { User } from '../models/User';
import { IStorageProvider } from '../providers/interfaces/IStorageProvider';
import { UsersRepository } from '../repositories/UsersRepository';

interface IRequest {
  user_id: string;
  avatarFilename: string;
}

class UpdateUserAvatarService {
  constructor(private storageProvider: IStorageProvider) {}

  public async execute({ user_id, avatarFilename }: IRequest): Promise<User> {
    const userRepository = new UsersRepository();

    const user = await userRepository.findById(user_id);

    if (!user) {
      throw new AppError('', 'Only authenticated users can change avatar', 401);
    }

    if (user.avatar) {
      // Deletar avatar anterior
      this.storageProvider.deleteFile(user.avatar);
    }
    const filename = await this.storageProvider.saveFile(avatarFilename);

    user.avatar = filename;

    await userRepository.save(user);

    return user;
  }
}

export default UpdateUserAvatarService;
