import { MigrationInterface, QueryRunner } from 'typeorm';

export class GenerateRelacionalTables1621395902341
  implements MigrationInterface {
  name = 'GenerateRelacionalTables1621395902341';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "product_ingredients" ("productId" uuid NOT NULL, "ingredientId" uuid NOT NULL, CONSTRAINT "PK_48e5271492b738d87ca91625294" PRIMARY KEY ("productId", "ingredientId"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_0c47e7d54540edb8171ebe4e77" ON "product_ingredients" ("productId") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_b40728e717eb031baa2e85371e" ON "product_ingredients" ("ingredientId") `,
    );
    await queryRunner.query(
      `CREATE TABLE "product_places" ("productId" uuid NOT NULL, "placeId" uuid NOT NULL, CONSTRAINT "PK_35a19b494b6486e420186167c1d" PRIMARY KEY ("productId", "placeId"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_73001dbc7304139c7eca6d5762" ON "product_places" ("productId") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_ec80a25409dfd494493e4113e2" ON "product_places" ("placeId") `,
    );
    await queryRunner.query(
      `ALTER TABLE "product_ingredients" ADD CONSTRAINT "FK_0c47e7d54540edb8171ebe4e775" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "product_ingredients" ADD CONSTRAINT "FK_b40728e717eb031baa2e85371ea" FOREIGN KEY ("ingredientId") REFERENCES "ingredient"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "product_places" ADD CONSTRAINT "FK_73001dbc7304139c7eca6d57623" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "product_places" ADD CONSTRAINT "FK_ec80a25409dfd494493e4113e29" FOREIGN KEY ("placeId") REFERENCES "place"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "product_places" DROP CONSTRAINT "FK_ec80a25409dfd494493e4113e29"`,
    );
    await queryRunner.query(
      `ALTER TABLE "product_places" DROP CONSTRAINT "FK_73001dbc7304139c7eca6d57623"`,
    );
    await queryRunner.query(
      `ALTER TABLE "product_ingredients" DROP CONSTRAINT "FK_b40728e717eb031baa2e85371ea"`,
    );
    await queryRunner.query(
      `ALTER TABLE "product_ingredients" DROP CONSTRAINT "FK_0c47e7d54540edb8171ebe4e775"`,
    );
    await queryRunner.query(`DROP INDEX "IDX_ec80a25409dfd494493e4113e2"`);
    await queryRunner.query(`DROP INDEX "IDX_73001dbc7304139c7eca6d5762"`);
    await queryRunner.query(`DROP TABLE "product_places"`);
    await queryRunner.query(`DROP INDEX "IDX_b40728e717eb031baa2e85371e"`);
    await queryRunner.query(`DROP INDEX "IDX_0c47e7d54540edb8171ebe4e77"`);
    await queryRunner.query(`DROP TABLE "product_ingredients"`);
  }
}
