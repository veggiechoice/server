import { Request, Response } from 'express';
import AppError from '../errors/AppError';
import { BrandsRepository } from '../repositories/BrandsRepository';

/**
 * @author: Julia Leite de Souza.
 * @description -Brands Controller.
 */
class BrandsController {
  constructor() {}

  public async create(request: Request, response: Response) {
    const { name, description, products } = request.body;
    const brandsRepository = new BrandsRepository();
    const brandsExists = await brandsRepository.findByName(name);

    if (brandsExists) {
      throw new AppError('The brand already exist');
    }

    const brands = await brandsRepository.create({
      name,
      description,
      products,
    });

    return response.json(brands);
  }

  public async index(request: Request, response: Response) {
    const brandsRepository = new BrandsRepository();
    const brands = await brandsRepository.findAll();

    return response.json(brands);
  }

  public async delete(request: Request, response: Response) {
    const brandsRepository = new BrandsRepository();
    const { id } = request.params;

    await brandsRepository.deleteOne(id);
    return response.send();
  }

  public async update(request: Request, response: Response) {
    const { name, description, product } = request.body;
    const brandsRepository = new BrandsRepository();
    const { id } = request.params;
    const brands = await brandsRepository.findByBrands(id);

    if (!brands) {
      throw new AppError('No brand was found!');
    }

    if (name) {
      brands.name = name;
    }

    if (description) {
      brands.description = description;
    }

    if (product) {
      brands.products = product;
    }

    return response.json(brandsRepository.save(brands));
  }
}

export { BrandsController };
