import { Exclude, Expose } from 'class-transformer';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Adress } from './Adress';

/**
 * @author: Gabriel de Moura e Souza.
 * @description - Classe entidade de Usuários.
 * @description - As notations @Entity vem do TypeORM e são utilizadas para mapear as tabelas do banco de dados.
 * @inheritdoc - Classes de entidade devem ser inicializadas com a primeira letra maiúscula.
 */
@Entity('user')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Exclude()
  @Column()
  password?: string;

  @ManyToOne(() => Adress, {
    eager: true,
    cascade: true,
  })
  address: Adress;

  @Exclude()
  @Column({
    nullable: true,
  })
  avatar: string;

  @CreateDateColumn()
  createdAt: Date;

  @CreateDateColumn()
  updatedAt: Date;

  @Expose()
  get avatar_url() {
    if (this.avatar) return `${process.env.API_URL}/${this.avatar}`;
    return null;
  }
}

export { User };
