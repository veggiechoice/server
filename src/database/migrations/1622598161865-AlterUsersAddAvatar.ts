import { MigrationInterface, QueryRunner } from 'typeorm';

export class AlterUsersAddAvatar1622598161865 implements MigrationInterface {
  name = 'AlterUsersAddAvatar1622598161865';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" ADD "avatar" character varying`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "avatar"`);
  }
}
