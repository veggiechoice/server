import { NextFunction, Request, Response } from 'express';
import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

export default async function resizeImage(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  await sharp(req.file.path)
    .resize(700)
    .toFormat('png')
    .png({
      quality: 50,
      force: true,
    })
    .toFile(
      path.resolve(
        req.file.destination,
        'resized',
        `${req.file.filename.split('.')[0]}.png`,
      ),
    );
  req.filename = `${req.file.filename.split('.')[0]}.png`;
  fs.unlinkSync(req.file.path);
  return next();
}
