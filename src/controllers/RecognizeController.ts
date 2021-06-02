import { Request, Response } from 'express';
import { In } from 'typeorm';

import AppError from '../errors/AppError';
import { IStorageProvider } from '../providers/interfaces/IStorageProvider';
import { DiskStorageProvider } from '../providers/StorageProvider';
import { IngredientsRepository } from '../repositories/IngredientsRepository';
import { fetchTextFromImage } from '../utils/fetchTextFromImage';
import { verifyVeganFromText } from '../utils/verifyVeganFromText';
import uploadConfig from '../config/label_upload';
/**
 * @author: Gabriel de Moura e Souza.
 * @description -Ingredients Controller.
 */
class RecognizeController {
  private storageProvider: IStorageProvider;

  public async index(request: Request, response: Response) {
    const { _scan } = request.query;
    const url = `${process.env.FILES_URL}/labels/resized/${request.filename}`;

    let text: string[] = [];
    this.storageProvider = new DiskStorageProvider(
      uploadConfig.directory,
      `${uploadConfig.uploadsFolder}/resized`,
    );
    text = await fetchTextFromImage(url);

    if (text.length <= 0)
      throw new AppError(
        'Não foi possível verificar este produto',
        'NonVegan',
        500,
      );

    await this.storageProvider.deleteFile(request.filename);
    const isVegan = verifyVeganFromText(text);

    if (_scan) return response.json({ isVegan });
    if (!isVegan) {
      throw new AppError('Este Produto não é Vegano!', 'NonVegan', 401);
    }
    const ingredientsRepository = new IngredientsRepository();
    const ingredientsUnion = await ingredientsRepository.listAll({
      where: { isVegan, key: In(text) },
    });

    return response.json({ isVegan, row: ingredientsUnion });
  }
}

export { RecognizeController };
