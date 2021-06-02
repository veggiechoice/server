import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Categories } from '../../models/Categories';

const SeedData = [
  {
    id: uuid(),
    name: 'Alimentos',
    description: 'Produtos comestiveis',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Produtos de Limpeza',
    description: 'Produtos de saude e higiene pessoal',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Cosméticos',
    description: 'Produtos de saude e higiene pessoal',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
];

export default class CategoriesSeedData implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Categories)
      .values(SeedData)
      .execute();
  }
}
