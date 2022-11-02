import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1667341583391 implements MigrationInterface {
    name = 'createTables1667341583391'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "movies" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "gender" character varying NOT NULL, "avaliation" numeric(1,1) NOT NULL, "duration" character varying NOT NULL, "onDisplay" boolean NOT NULL, "cinemaId" integer, CONSTRAINT "PK_c5b2c134e871bfd1c2fe7cc3705" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "rooms" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "capacity" character varying(100) NOT NULL, "cinemaId" integer, CONSTRAINT "PK_0368a2d7c215f2d0458a54933f2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "paymentInfo" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(60) NOT NULL, "number" character varying(16) NOT NULL, "dueDate" date NOT NULL, "code" character varying(3) NOT NULL, CONSTRAINT "PK_aa67d95006c6ffaa5cb3b3fcfbf" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "sessions" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "day" date NOT NULL DEFAULT now(), "hour" TIMESTAMP NOT NULL DEFAULT now(), "roomId" uuid, "movieId" uuid, CONSTRAINT "REL_d3b8d4216196711835291bd408" UNIQUE ("roomId"), CONSTRAINT "REL_634b9dee3787a14c1d7b6e893f" UNIQUE ("movieId"), CONSTRAINT "PK_3238ef96f18b355b671619111bc" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tickets" ("id" uuid NOT NULL, "quantity" integer NOT NULL, "price" integer NOT NULL, "chair" character varying NOT NULL, "sessionId" uuid, CONSTRAINT "REL_d175b024857bfa9676f6a06368" UNIQUE ("sessionId"), CONSTRAINT "PK_343bc942ae261cf7a1377f48fd0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "birthDate" TIMESTAMP NOT NULL, "isActive" boolean NOT NULL DEFAULT true, "isAdm" boolean NOT NULL DEFAULT false, "isEmployee" boolean NOT NULL DEFAULT false, "contact" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "ticketsId" uuid, "paymentInfoId" uuid, "cinemaId" integer, CONSTRAINT "REL_b3329d00ba3477e2f1a32da958" UNIQUE ("ticketsId"), CONSTRAINT "REL_8cd3b57fedc2bc5eccd61ee240" UNIQUE ("paymentInfoId"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "cinema" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_65912fd9911f64e56eadf654912" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "movies" ADD CONSTRAINT "FK_ec02b414813e3b5e8622a03a6e6" FOREIGN KEY ("cinemaId") REFERENCES "cinema"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "rooms" ADD CONSTRAINT "FK_dd1f391d9d7626a3eaef9483041" FOREIGN KEY ("cinemaId") REFERENCES "cinema"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sessions" ADD CONSTRAINT "FK_d3b8d4216196711835291bd4083" FOREIGN KEY ("roomId") REFERENCES "rooms"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sessions" ADD CONSTRAINT "FK_634b9dee3787a14c1d7b6e893f2" FOREIGN KEY ("movieId") REFERENCES "movies"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tickets" ADD CONSTRAINT "FK_d175b024857bfa9676f6a06368f" FOREIGN KEY ("sessionId") REFERENCES "sessions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_b3329d00ba3477e2f1a32da9583" FOREIGN KEY ("ticketsId") REFERENCES "tickets"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_8cd3b57fedc2bc5eccd61ee2409" FOREIGN KEY ("paymentInfoId") REFERENCES "paymentInfo"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_32dc5368285e0b69f2f72326b60" FOREIGN KEY ("cinemaId") REFERENCES "cinema"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_32dc5368285e0b69f2f72326b60"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_8cd3b57fedc2bc5eccd61ee2409"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_b3329d00ba3477e2f1a32da9583"`);
        await queryRunner.query(`ALTER TABLE "tickets" DROP CONSTRAINT "FK_d175b024857bfa9676f6a06368f"`);
        await queryRunner.query(`ALTER TABLE "sessions" DROP CONSTRAINT "FK_634b9dee3787a14c1d7b6e893f2"`);
        await queryRunner.query(`ALTER TABLE "sessions" DROP CONSTRAINT "FK_d3b8d4216196711835291bd4083"`);
        await queryRunner.query(`ALTER TABLE "rooms" DROP CONSTRAINT "FK_dd1f391d9d7626a3eaef9483041"`);
        await queryRunner.query(`ALTER TABLE "movies" DROP CONSTRAINT "FK_ec02b414813e3b5e8622a03a6e6"`);
        await queryRunner.query(`DROP TABLE "cinema"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "tickets"`);
        await queryRunner.query(`DROP TABLE "sessions"`);
        await queryRunner.query(`DROP TABLE "paymentInfo"`);
        await queryRunner.query(`DROP TABLE "rooms"`);
        await queryRunner.query(`DROP TABLE "movies"`);
    }

}
