/* eslint-disable prefer-destructuring */
import { classToPlain } from 'class-transformer';
import { getRepository, Repository } from 'typeorm';
import { Brand } from '../models/Brands';
import { Categories } from '../models/Categories';
import { Files } from '../models/Files';
import { Ingredient } from '../models/Ingredients';
import { Product } from '../models/Product';

interface IProducts {
  category: Categories;
  brand: Brand;
  ingredients: Ingredient[];
  name: string;
  description: string;
  isVegan: boolean;
  files?: Files[];
  thumbnail?: string;
}

/**
 * @author: Gabriel de Moura e Souza
 * @description - Classe de repositorio da Productss.
 */
class ProductsRepository {
  private ormRepository: Repository<Product> = getRepository(Product);

  constructor() {
    this.ormRepository = getRepository(Product);
  }

  public async listAll(filters: any) {
    const products = await this.ormRepository.find({
      ...filters,
    });

    return classToPlain(products);
  }

  public async findById(id: string) {
    let product;
    product = await this.ormRepository.findOne({
      where: { id },
    });
    product = { ...product, thumbnail: product?.files[0] || null };
    return product;
  }

  public async findByName(name: string) {
    const product = await this.ormRepository.findOne({
      where: { name },
    });

    return product;
  }

  public async create(data: IProducts) {
    const product = this.ormRepository.create(data);

    await this.save(product);

    return product;
  }

  public async save(data: IProducts) {
    return this.ormRepository.save(data);
  }
}

export { ProductsRepository };
