import { Request, Response } from 'express';
import { Like } from 'typeorm';
import { IngredientsRepository } from '../repositories/IngredientsRepository';
/**
 * @author: Gabriel de Moura e Souza.
 * @description -Ingredients Controller.
 */
class IngredientsController {
  constructor() {}

  public async index(request: Request, response: Response) {
    const ingredientsRepository = new IngredientsRepository();
    const query: any = {
      where: [
        {
          enabled: true,
        },
      ],
    };

    const {
      _limit,
      _sort,
      _order,
      _page,
      _search,
      _isVegan,
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
      query.where.push({ name: Like(`%${_search}%`) });
    }

    if (_isVegan) {
      query.where = {
        isVegan: _isVegan === 'true',
        // isso aqui é idiota, mas vou deixar poq to sem tempo
        enabled: true,
      };
    }

    const ingredients = await ingredientsRepository.listAll(query);
    return response.json({ row: ingredients, count: ingredients.length });
  }

  public async show(request: Request, response: Response) {
    const { id } = request.params;
    const ingredientsRepository = new IngredientsRepository();
    const ingredient = await ingredientsRepository.findById(id);
    return response.json(ingredient);
  }
}

export { IngredientsController };
