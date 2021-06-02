/* eslint-disable no-unused-vars */
interface IStorageProvider {
  saveFile(file: string): Promise<string>;
  deleteFile(file: string): Promise<void>;
}

export { IStorageProvider };
