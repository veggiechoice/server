import { getRepository, Repository } from 'typeorm';
import { Files } from '../models/Files';
import { Product } from '../models/Product';

interface IFiles {
  name: string;
  size: string;
  product: Product;
}

/**
 * @author: Heloisa Gabriela Vieira.
 * @description - Classe de repositorio de Files.
 */
class FilesRepository {
  private ormRepository: Repository<Files> = getRepository(Files);

  constructor() {
    this.ormRepository = getRepository(Files);
  }

  public async findByProductId(id: string) {
    const files = await this.ormRepository.findOne(id);

    return files || null;
  }

  public async findByPk(id: string) {
    const files = await this.ormRepository.findByIds([id]);

    return files || null;
  }

  public async findByName(name: string) {
    const files = await this.ormRepository.findOne({
      where: { name },
    });

    return files || null;
  }

  public async findAll() {
    const files = await this.ormRepository.find();

    return files || null;
  }

  public async create(data: IFiles) {
    const files = this.ormRepository.create(data);

    await this.save(files);
    return files;
  }

  public async save(files: IFiles) {
    return this.ormRepository.save(files);
  }

  public async deleteOne(id: string) {
    return this.ormRepository.delete(id);
  }
}

export { FilesRepository };
