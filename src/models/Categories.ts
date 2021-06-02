import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from './Product';

/**
 * @author: Natanael Gonzales.
 * @description - Classe de Categorias.
 */

@Entity('category')
class Categories {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @OneToMany(() => Product, product => product.category)
  products: Product[];
}

export { Categories };
