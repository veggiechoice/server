import { Exclude, Expose } from 'class-transformer';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Brand } from './Brands';
import { Categories } from './Categories';
import { Files } from './Files';
import { Ingredient } from './Ingredients';

@Entity('product')
class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Categories, {
    cascade: true,
    eager: true,
  })
  category: Categories;

  @ManyToOne(() => Brand)
  brand: Brand;

  @OneToMany(() => Files, file => file.product, {
    eager: true,
    cascade: true,
  })
  files: Files[];

  @ManyToMany(() => Ingredient, {
    eager: true,
    cascade: true,
  })
  @JoinTable({ name: 'product_ingredients' })
  ingredients: Ingredient[];

  @Exclude()
  @Column({
    nullable: true,
  })
  thumbnail: string;

  @Column({
    unique: true,
  })
  name: string;

  @Column()
  description: string;

  @Column({
    default: true,
  })
  isVegan: boolean;

  @Column({
    default: false,
  })
  isSeloVegano: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @CreateDateColumn()
  updatedAt: Date;

  @Expose()
  get thumbnail_url() {
    if (this.thumbnail && !this.isSeloVegano)
      return `${process.env.API_URL}/${this.thumbnail}`;
    if (this.thumbnail && this.isSeloVegano) return this.thumbnail;
    if (this.files[0]) return this.files[0].url;
    return null;
  }
}

export { Product };
