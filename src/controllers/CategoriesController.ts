import { Request, Response } from 'express';
import { CategoriesRepository } from '../repositories/CategoriesRepository';

/**
 * @author: Natanael Gonzales.
 * @description - Classe de Categorias.
 */
class CategoriesController {
  constructor() {}

  public async create(request: Request, response: Response) {
    const { name, description } = request.body;
    const categoriesRepository = new CategoriesRepository();

    const categories = await categoriesRepository.create({
      name,
      description,
    });

    return response.json(categories);
  }

  public async index(request: Request, response: Response) {
    const categoriesRepository = new CategoriesRepository();
    const categories = await categoriesRepository.findAll();

    return response.json({ row: categories, count: categories.length });
  }

  public async delete(request: Request, response: Response) {
    const categoriesRepository = new CategoriesRepository();
    const { id } = request.params;

    await categoriesRepository.deleteOne(id);
    return response.send();
  }
}

export { CategoriesController };
