import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1691898193968 implements MigrationInterface {
    name = 'Init1691898193968'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product_image" DROP CONSTRAINT "FK_40ca0cd115ef1ff35351bed8da2"`);
        await queryRunner.query(`ALTER TABLE "product_image" RENAME COLUMN "productId" TO "product_id"`);
        await queryRunner.query(`ALTER TABLE "product_image" ADD CONSTRAINT "FK_dbc7d9aa7ed42c9141b968a9ed3" FOREIGN KEY ("product_id") REFERENCES "product" ("id") ON DELETE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product_image" DROP CONSTRAINT "FK_dbc7d9aa7ed42c9141b968a9ed3"`);
        await queryRunner.query(`ALTER TABLE "product_image" RENAME COLUMN "product_id" TO "productId"`);
        await queryRunner.query(`ALTER TABLE "product_image" ADD CONSTRAINT "FK_40ca0cd115ef1ff35351bed8da2" FOREIGN KEY ("productId") REFERENCES "product" ("id") ON DELETE CASCADE`);
    }

}
