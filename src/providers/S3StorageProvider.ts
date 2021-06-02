import fs from 'fs';
import path from 'path';
import mime from 'mime-types';
import aws, { S3 } from 'aws-sdk';
import uploadConfig from '../config/upload';
import { IStorageProvider } from './interfaces/IStorageProvider';

class S3StorageProvider implements IStorageProvider {
  private client: S3;

  constructor() {
    this.client = new aws.S3({
      region: String(process.env.AWS_S3_REGION),
    });
  }

  public async saveFile(file: string): Promise<string> {
    const originalPath = path.resolve(
      `${uploadConfig.directory}/uploads`,
      file,
    );

    const ContentType = mime.contentType(originalPath);

    const fileContent = await fs.promises.readFile(originalPath);

    if (!ContentType) {
      throw new Error('File not Found');
    }

    await this.client
      .putObject({
        Bucket: String(uploadConfig.config.aws.bucket),
        Key: file,
        ACL: 'public-read',
        Body: fileContent,
        ContentType,
        ContentDisposition: `inline; filename=${file}`,
      })
      .promise();

    await fs.promises.unlink(originalPath);

    return file;
  }

  public async deleteFile(file: string): Promise<void> {
    await this.client
      .deleteObject({
        Bucket: String(uploadConfig.config.aws.bucket),
        Key: file,
      })
      .promise();
  }
}

export { S3StorageProvider };
