import fs from 'fs';
import path from 'path';
import { IStorageProvider } from './interfaces/IStorageProvider';

class DiskStorageProvider implements IStorageProvider {
  private directory: string;

  private uploadsFolder: string;

  constructor(directory: string, uploadsFolder: string) {
    this.directory = directory;
    this.uploadsFolder = uploadsFolder;
  }

  public async saveFile(file: string): Promise<string> {
    await fs.promises.rename(
      path.resolve(this.directory, file),
      path.resolve(this.uploadsFolder, file),
    );

    return file;
  }

  public async deleteFile(file: string): Promise<void> {
    const filePath = path.resolve(this.uploadsFolder, file);

    try {
      await fs.promises.stat(filePath);
    } catch {
      return;
    }
    await fs.promises.unlink(filePath);
  }
}

export { DiskStorageProvider };
