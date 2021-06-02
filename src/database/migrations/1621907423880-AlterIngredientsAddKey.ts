import { MigrationInterface, QueryRunner } from 'typeorm';

export class AlterIngredientsAddKey1621907423880 implements MigrationInterface {
  name = 'AlterIngredientsAddKey1621907423880';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "brand" DROP COLUMN "nome"`);
    await queryRunner.query(`ALTER TABLE "brand" DROP COLUMN "descrição"`);
    await queryRunner.query(
      `ALTER TABLE "ingredient" ADD "key" character varying`,
    );
    await queryRunner.query(
      `ALTER TABLE "brand" ADD "name" character varying NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "brand" ADD "description" character varying NOT NULL`,
    );
    await queryRunner.query(`COMMENT ON COLUMN "product"."isVegan" IS NULL`);
    await queryRunner.query(
      `ALTER TABLE "product" ALTER COLUMN "isVegan" SET DEFAULT true`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "product" ALTER COLUMN "isVegan" DROP DEFAULT`,
    );
    await queryRunner.query(`COMMENT ON COLUMN "product"."isVegan" IS NULL`);
    await queryRunner.query(`ALTER TABLE "brand" DROP COLUMN "description"`);
    await queryRunner.query(`ALTER TABLE "brand" DROP COLUMN "name"`);
    await queryRunner.query(`ALTER TABLE "ingredient" DROP COLUMN "key"`);
    await queryRunner.query(
      `ALTER TABLE "brand" ADD "descrição" character varying NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "brand" ADD "nome" character varying NOT NULL`,
    );
  }
}
