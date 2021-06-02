import { Column, Entity, ObjectIdColumn, ObjectID } from 'typeorm';

/**
 * @author: Gabriel de Moura e Souza.
 * @description - Classe de Lugares.
 */
@Entity('PointSchema')
class PointSchema {
  @ObjectIdColumn()
  id: ObjectID;

  @Column({
    enum: 'Point',
    nullable: false,
  })
  type: string;

  @Column({
    nullable: false,
  })
  coordinates: Array<Number>;
}

export { PointSchema };
