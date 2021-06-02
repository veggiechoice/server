import { getRepository, Repository } from 'typeorm';
import { Categories } from '../models/Categories';

interface ICategories {
  name: string;
  description: string;
}

/**
 * @author: Natanael Gonzales.
 * @description - Classe de Categorias.
 */
class CategoriesRepository {
  private ormRepository: Repository<Categories> = getRepository(Categories);

  constructor() {
    this.ormRepository = getRepository(Categories);
  }

  public async findAll() {
    return this.ormRepository.find();
  }

  public async findByPk(id: string) {
    const categories = await this.ormRepository.findByIds([id]);

    return categories || null;
  }

  public async create({ name, description }: ICategories) {
    const categories = this.ormRepository.create({
      name,
      description,
    });

    await this.save(categories);
    return categories;
  }

  public async save(categories: ICategories) {
    return this.ormRepository.save(categories);
  }

  public async deleteOne(id: string) {
    return this.ormRepository.delete(id);
  }
}

export { CategoriesRepository };
