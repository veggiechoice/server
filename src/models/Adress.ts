import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { User } from './User';

/**
 * @author: Gabriel de Moura e Souza.
 * @description - Classe entidade de Endereços.
 * @description - As notations @Entity vem do TypeORM e são utilizadas para mapear as tabelas do banco de dados.
 * @inheritdoc - Classes de entidade devem ser inicializadas com a primeira letra maiúscula.
 */
@Entity('adress')
class Adress {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  street: string;

  @Column()
  city: string;

  @Column()
  number: string;

  @Column()
  country: string;

  @Column()
  zipcode: string;

  @CreateDateColumn()
  createdAt: Date;

  @CreateDateColumn()
  updatedAt: Date;

  @OneToMany(() => User, user => user.address)
  user: User;
}

export { Adress };
