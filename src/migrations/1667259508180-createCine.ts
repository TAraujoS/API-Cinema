import { MigrationInterface, QueryRunner } from "typeorm";

export class createCine1667259508180 implements MigrationInterface {
    name = 'createCine1667259508180'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "movies" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "gender" character varying NOT NULL, "avaliation" double precision(1,1) NOT NULL, "duration" double precision(4,2) NOT NULL, "onDisplay" boolean NOT NULL, "cinemaId" integer, CONSTRAINT "PK_c5b2c134e871bfd1c2fe7cc3705" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "paymentInfo" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(60) NOT NULL, "number" character varying(16) NOT NULL, "dueDate" date NOT NULL, "code" character varying(3) NOT NULL, CONSTRAINT "PK_aa67d95006c6ffaa5cb3b3fcfbf" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "birthDate" TIMESTAMP NOT NULL, "isActive" boolean NOT NULL DEFAULT true, "isAdm" boolean NOT NULL DEFAULT false, "isEmploee" boolean NOT NULL DEFAULT false, "contact" character varying NOT NULL, "email" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "paymentInfoId" uuid, "cinemaId" integer, CONSTRAINT "REL_8cd3b57fedc2bc5eccd61ee240" UNIQUE ("paymentInfoId"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "cinema" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_65912fd9911f64e56eadf654912" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "movies" ADD CONSTRAINT "FK_ec02b414813e3b5e8622a03a6e6" FOREIGN KEY ("cinemaId") REFERENCES "cinema"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_8cd3b57fedc2bc5eccd61ee2409" FOREIGN KEY ("paymentInfoId") REFERENCES "paymentInfo"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_32dc5368285e0b69f2f72326b60" FOREIGN KEY ("cinemaId") REFERENCES "cinema"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_32dc5368285e0b69f2f72326b60"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_8cd3b57fedc2bc5eccd61ee2409"`);
        await queryRunner.query(`ALTER TABLE "movies" DROP CONSTRAINT "FK_ec02b414813e3b5e8622a03a6e6"`);
        await queryRunner.query(`DROP TABLE "cinema"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "paymentInfo"`);
        await queryRunner.query(`DROP TABLE "movies"`);
    }

}
