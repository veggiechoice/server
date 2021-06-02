import { MigrationInterface, QueryRunner } from 'typeorm';

export class AlterProductAddIsSeloVegano1622600652244
  implements MigrationInterface {
  name = 'AlterProductAddIsSeloVegano1622600652244';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "product" ADD "isSeloVegano" boolean NOT NULL DEFAULT false`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "isSeloVegano"`);
  }
}
