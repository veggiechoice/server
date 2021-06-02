import { classToPlain } from 'class-transformer';
import { Request, Response } from 'express';
import { Like } from 'typeorm';
import AppError from '../errors/AppError';
import { IngredientsRepository } from '../repositories/IngredientsRepository';
import { PlacesRepository } from '../repositories/PlacesRepository';
import { ProductsRepository } from '../repositories/ProductsRepository';
import { ConvertStringToObject } from '../utils/convertStringToObjectWithId';

/**
 * @author: Gabriel de Moura e Souza.
 * @description -Places Controller.
 */
class ProductsController {
  constructor() {}

  public async create(request: Request, response: Response) {
    const productsRepository = new ProductsRepository();
    let files = request.files as any[];

    if (request.files) {
      files = files.map(el => {
        return {
          name: el.filename,
          size: el.size,
        };
      }) as any;
    }

    const {
      category,
      brand,
      ingredients,
      name,
      description,
      isVegan,
      location,
    } = request.body;

    const productExist = await productsRepository.findByName(name);
    if (productExist) {
      throw new AppError('A Product with this name already exist');
    }

    let ingredientsObj: any;

    if (ingredients) {
      ingredientsObj = ConvertStringToObject(ingredients);
    }

    const product = await productsRepository.create({
      category: category ? JSON.parse(category) : null,
      brand,
      ingredients: ingredients ? ingredientsObj : null,
      name,
      description,
      isVegan: Boolean(isVegan),
      files: files || null,
      thumbnail: files[0].name || null,
    });

    if (location) {
      const placesRepository = new PlacesRepository();
      await placesRepository.create(JSON.parse(location) as any);
    }
    return response.json(classToPlain(product));
  }

  public async createIngredient(request: Request, response: Response) {
    const ingredientsRepository = new IngredientsRepository();
    const { name, isVegan, enabled } = request.body;
    const ingrediet = await ingredientsRepository.create({
      name,
      isVegan,
      enabled,
    });
    return response.json(ingrediet);
  }

  public async index(request: Request, response: Response) {
    const productsRepository = new ProductsRepository();
    const query: any = {
      where: [],
    };

    const {
      _limit,
      _sort,
      _order,
      _page,
      _search,
      _categoryId,
      _brandId,
    } = request.query as any;

    if (_limit) {
      query.take = _limit;
    }

    if (_page) {
      query.skip = 10 * (_page - 1 < 0 ? 0 : _page - 1);
    }

    if (_sort) {
      query.order = {
        [_sort]: _order?.toUpperCase() || 'ASC',
      };
    } else if (_order) {
      query.order = {
        name: 'ASC',
      };
    }

    if (_search) {
      query.where = [
        { name: Like(`%${_search}%`) },
        { description: Like(`%${_search}%`) },
      ];
    }

    if (_categoryId) {
      query.where.push({
        category: {
          id: _categoryId,
        },
      });
    }
    if (_brandId) {
      query.where.push({
        brand: {
          id: _brandId,
        },
      });
    }

    const products = await productsRepository.listAll(query);
    return response.json(products);
  }

  public async show(request: Request, response: Response) {
    const { id } = request.params;
    const productsRepository = new ProductsRepository();
    const products = await productsRepository.findById(id);
    return response.json(products);
  }
}

export { ProductsController };
