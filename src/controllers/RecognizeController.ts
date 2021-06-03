import { Request, Response } from 'express';
import { In } from 'typeorm';
import AppError from '../errors/AppError';
import { S3StorageProvider } from '../providers/S3StorageProvider';
import { DiskStorageProvider } from '../providers/StorageProvider';
import { IngredientsRepository } from '../repositories/IngredientsRepository';
import { fetchTextFromImage } from '../utils/fetchTextFromImage';
import { verifyVeganFromText } from '../utils/verifyVeganFromText';

/**
 * @author: Gabriel de Moura e Souza.
 * @description -Ingredients Controller.
 */
class RecognizeController {
  public async index(request: Request, response: Response) {
    const s3StorageProvider = new S3StorageProvider();
    const diskStorageProvider = new DiskStorageProvider();
    const { _scan } = request.query;
    const url = `${process.env.API_URL}/${request.filename}`;

    const text = await fetchTextFromImage(url);

    if (text.length <= 0)
      throw new AppError(
        'Não foi possível verificar este produto',
        'NonVegan',
        500,
      );

    await diskStorageProvider.deleteFile(request.filename);
    await s3StorageProvider.deleteFile(request.filename);

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
