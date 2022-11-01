import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1667313976446 implements MigrationInterface {
    name = 'createTables1667313976446'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "password" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "password"`);
    }

}
