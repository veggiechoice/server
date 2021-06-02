import {MigrationInterface, QueryRunner} from "typeorm";

export class AlterProductAddThumbnail1622599315123 implements MigrationInterface {
    name = 'AlterProductAddThumbnail1622599315123'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" ADD "thumbnail" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "thumbnail"`);
    }

}
