import { NextFunction, Request, Response } from 'express';
import AppError from '../errors/AppError';
import { S3StorageProvider } from '../providers/S3StorageProvider';

export default async function UploadImage(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const storageProvider = new S3StorageProvider();
    const filename = await storageProvider.saveFile(req.file.filename);

    req.filename = filename;
    next();
  } catch {
    throw new AppError('S3Error', 'File could not be upload to S3');
  }
}
