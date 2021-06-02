import { Request, Response } from 'express';
import { classToClass } from 'class-transformer';
import UpdateUserAvatarService from '../services/UpdateAvatarService';
import { S3StorageProvider } from '../providers/S3StorageProvider';

export default class UserAvatarController {
  async update(request: Request, response: Response): Promise<Response> {
    const storageProvider = new S3StorageProvider();
    const updateUserAvatar = new UpdateUserAvatarService(storageProvider);

    const user = await updateUserAvatar.execute({
      user_id: request.user.id,
      avatarFilename: request.file.filename,
    });

    delete user.password;
    return response.json(classToClass(user));
  }
}
