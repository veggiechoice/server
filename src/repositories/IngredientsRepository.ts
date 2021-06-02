import { getRepository, Repository } from 'typeorm';
import { Ingredient } from '../models/Ingredients';

interface IIngredient {
  name: string;
  isVegan: boolean;
  enabled: boolean;
}

/**
 * @author: Heloisa Gabriela Vieira.
 * @description - Classe de repositorio de Ingredients.
 */
class IngredientsRepository {
  private ormRepository: Repository<Ingredient> = getRepository(Ingredient);

  constructor() {
    this.ormRepository = getRepository(Ingredient);
  }

  public async listAll(filters: any) {
    const ingredients = await this.ormRepository.find({
      ...filters,
    });

    return ingredients;
  }

  public async findById(id: string) {
    const ingredient = await this.ormRepository.findOne({
      where: { id },
    });
    return ingredient;
  }

  public async create(data: IIngredient) {
    const ingredient = await this.ormRepository.create(data);
    await this.save(ingredient);
    return ingredient;
  }

  public async save(data: IIngredient) {
    return this.ormRepository.save(data);
  }
}

export { IngredientsRepository };
