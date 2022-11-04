import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1667499998185 implements MigrationInterface {
    name = 'createTables1667499998185'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "rooms" DROP COLUMN "capacity"`);
        await queryRunner.query(`ALTER TABLE "rooms" ADD "capacity" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "rooms" DROP COLUMN "capacity"`);
        await queryRunner.query(`ALTER TABLE "rooms" ADD "capacity" character varying(100) NOT NULL`);
    }

}
