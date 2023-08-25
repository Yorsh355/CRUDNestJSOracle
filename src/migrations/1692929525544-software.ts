import { MigrationInterface, QueryRunner } from "typeorm";

export class Software1692929525544 implements MigrationInterface {
    name = 'Software1692929525544'

    public async up(queryRunner: QueryRunner): Promise<void> {
        
        
        await queryRunner.query(`CREATE TABLE "S_SOFTWARE" ("SOFTID" number NOT NULL, "SOFTNOMB" varchar2(255) NOT NULL, "SOFTABRV" varchar2(255) NOT NULL, "SOFTESTADO" varchar2(1) DEFAULT 'A' NOT NULL, "SOFTUSCR" varchar2(10) NOT NULL, "SOFTFECR" date DEFAULT SYSDATE NOT NULL, "SOFTUSAC" varchar2(10), "SOFTFEAC" date, CONSTRAINT "PK_c089b5e5a3c473e7efe25d7d50d" PRIMARY KEY ("SOFTID"))`);
        await queryRunner.query(`CREATE TABLE "S_EMPRESOFTWARE" ("USUAID" number NOT NULL, "SOFTID" number NOT NULL, CONSTRAINT "PK_b43cc317f0d13f21197a1f0a8b1" PRIMARY KEY ("USUAID", "SOFTID"))`);
        await queryRunner.query(`CREATE INDEX "IDX_26c0fdf2c8d2d8d2d868c8b4cb" ON "S_EMPRESOFTWARE" ("USUAID")`);
        await queryRunner.query(`CREATE INDEX "IDX_6b7bd3e63d2163d18006ddb655" ON "S_EMPRESOFTWARE" ("SOFTID")`);
        await queryRunner.query(`ALTER TABLE "S_EMPRESOFTWARE" ADD CONSTRAINT "FK_6b7bd3e63d2163d18006ddb655d" FOREIGN KEY ("SOFTID") REFERENCES "S_SOFTWARE" ("SOFTID")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "S_EMPRESOFTWARE" DROP CONSTRAINT "FK_6b7bd3e63d2163d18006ddb655d"`);
        await queryRunner.query(`ALTER TABLE "S_EMPRESOFTWARE" DROP CONSTRAINT "FK_26c0fdf2c8d2d8d2d868c8b4cb5"`);
        await queryRunner.query(`DROP INDEX "IDX_6b7bd3e63d2163d18006ddb655"`);
        await queryRunner.query(`DROP INDEX "IDX_26c0fdf2c8d2d8d2d868c8b4cb"`);
        await queryRunner.query(`DROP TABLE "S_EMPRESOFTWARE"`);
        await queryRunner.query(`DROP TABLE "S_SOFTWARE"`);
    }

}
