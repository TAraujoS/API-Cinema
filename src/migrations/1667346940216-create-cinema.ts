import { MigrationInterface, QueryRunner } from "typeorm";

export class createCinema1667346940216 implements MigrationInterface {
    name = 'createCinema1667346940216'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sessions" DROP CONSTRAINT "FK_d3b8d4216196711835291bd4083"`);
        await queryRunner.query(`ALTER TABLE "tickets" DROP CONSTRAINT "FK_4bb45e096f521845765f657f5c8"`);
        await queryRunner.query(`CREATE TABLE "sessions_rooms_rooms" ("sessionsId" uuid NOT NULL, "roomsId" uuid NOT NULL, CONSTRAINT "PK_9b1d15b5ed6ac238cbfea8ff0a8" PRIMARY KEY ("sessionsId", "roomsId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_774e923b1268a4178376209143" ON "sessions_rooms_rooms" ("sessionsId") `);
        await queryRunner.query(`CREATE INDEX "IDX_e2319def6f81676d2ce596f243" ON "sessions_rooms_rooms" ("roomsId") `);
        await queryRunner.query(`ALTER TABLE "sessions" DROP CONSTRAINT "REL_d3b8d4216196711835291bd408"`);
        await queryRunner.query(`ALTER TABLE "sessions" DROP COLUMN "roomId"`);
        await queryRunner.query(`ALTER TABLE "tickets" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "tickets" ADD "quantity" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "ticketsId" uuid`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_b3329d00ba3477e2f1a32da9583" UNIQUE ("ticketsId")`);
        await queryRunner.query(`ALTER TABLE "tickets" ALTER COLUMN "price" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "tickets" DROP COLUMN "chair"`);
        await queryRunner.query(`ALTER TABLE "tickets" ADD "chair" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_b3329d00ba3477e2f1a32da9583" FOREIGN KEY ("ticketsId") REFERENCES "tickets"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sessions_rooms_rooms" ADD CONSTRAINT "FK_774e923b1268a4178376209143d" FOREIGN KEY ("sessionsId") REFERENCES "sessions"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "sessions_rooms_rooms" ADD CONSTRAINT "FK_e2319def6f81676d2ce596f243c" FOREIGN KEY ("roomsId") REFERENCES "rooms"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sessions_rooms_rooms" DROP CONSTRAINT "FK_e2319def6f81676d2ce596f243c"`);
        await queryRunner.query(`ALTER TABLE "sessions_rooms_rooms" DROP CONSTRAINT "FK_774e923b1268a4178376209143d"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_b3329d00ba3477e2f1a32da9583"`);
        await queryRunner.query(`ALTER TABLE "tickets" DROP COLUMN "chair"`);
        await queryRunner.query(`ALTER TABLE "tickets" ADD "chair" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "tickets" ALTER COLUMN "price" SET DEFAULT '15'`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_b3329d00ba3477e2f1a32da9583"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "ticketsId"`);
        await queryRunner.query(`ALTER TABLE "tickets" DROP COLUMN "quantity"`);
        await queryRunner.query(`ALTER TABLE "tickets" ADD "userId" uuid`);
        await queryRunner.query(`ALTER TABLE "sessions" ADD "roomId" uuid`);
        await queryRunner.query(`ALTER TABLE "sessions" ADD CONSTRAINT "REL_d3b8d4216196711835291bd408" UNIQUE ("roomId")`);
        await queryRunner.query(`DROP INDEX "public"."IDX_e2319def6f81676d2ce596f243"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_774e923b1268a4178376209143"`);
        await queryRunner.query(`DROP TABLE "sessions_rooms_rooms"`);
        await queryRunner.query(`ALTER TABLE "tickets" ADD CONSTRAINT "FK_4bb45e096f521845765f657f5c8" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sessions" ADD CONSTRAINT "FK_d3b8d4216196711835291bd4083" FOREIGN KEY ("roomId") REFERENCES "rooms"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
