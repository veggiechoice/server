import { getRepository, Repository } from 'typeorm';
import { Brand } from '../models/Brands';
import { Product } from '../models/Product';

interface IBrands {
  name: string;
  description: string;
  products: Product[];
}

/**
 * @author: Julia Leite de Souza.
 * @description - Classe de repositorio da Brands.
 */
class BrandsRepository {
  private ormRepository: Repository<Brand> = getRepository(Brand);

  constructor() {
    this.ormRepository = getRepository(Brand);
  }

  public async findByBrands(id: string) {
    const brands = await this.ormRepository.findOne(id);

    return brands || null;
  }

  public async findByPk(id: string) {
    const brands = await this.ormRepository.findByIds([id]);

    return brands || null;
  }

  public async findByName(name: string) {
    const brands = await this.ormRepository.findOne({
      where: { name },
    });

    return brands || null;
  }

  public async findAll() {
    const brands = await this.ormRepository.find();

    return brands || null;
  }

  public async create({ name, description, products }: IBrands) {
    const brands = this.ormRepository.create({
      name,
      description,
      products,
    });

    await this.save(brands);
    return brands;
  }

  public async save(brands: Brand) {
    return this.ormRepository.save(brands);
  }

  public async deleteOne(id: string) {
    return this.ormRepository.delete(id);
  }
}

export { BrandsRepository };
