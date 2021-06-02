import multer from 'multer';
import path from 'path';
import crypto from 'crypto';
import uploadConfig from './upload';

const tmpFolder = path.resolve(__dirname, '..', '..', 'tmp');

export default {
  directory: uploadConfig.directory,
  uploadsFolder: path.resolve(tmpFolder, 'uploads', 'labels'),
  storage: multer.diskStorage({
    destination: path.resolve(tmpFolder, 'uploads', 'labels'),
    filename(requst, file, callback) {
      const fileHash = crypto.randomBytes(10).toString('hex');
      const fileName = `${fileHash}`;

      return callback(null, fileName);
    },
  }),
};
