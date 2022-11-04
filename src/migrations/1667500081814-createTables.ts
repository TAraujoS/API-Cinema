import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1667500081814 implements MigrationInterface {
    name = 'createTables1667500081814'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "rooms" DROP COLUMN "capacity"`);
        await queryRunner.query(`ALTER TABLE "rooms" ADD "capacity" integer`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "rooms" DROP COLUMN "capacity"`);
        await queryRunner.query(`ALTER TABLE "rooms" ADD "capacity" character varying(100) NOT NULL`);
    }

}
