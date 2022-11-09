import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1668022264765 implements MigrationInterface {
    name = 'createTables1668022264765'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_8cd3b57fedc2bc5eccd61ee2409"`);
        await queryRunner.query(`ALTER TABLE "tickets" DROP CONSTRAINT "FK_d175b024857bfa9676f6a06368f"`);
        await queryRunner.query(`ALTER TABLE "tickets" DROP CONSTRAINT "REL_d175b024857bfa9676f6a06368"`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_8cd3b57fedc2bc5eccd61ee2409" FOREIGN KEY ("paymentInfoId") REFERENCES "paymentInfo"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tickets" ADD CONSTRAINT "FK_d175b024857bfa9676f6a06368f" FOREIGN KEY ("sessionId") REFERENCES "sessions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tickets" DROP CONSTRAINT "FK_d175b024857bfa9676f6a06368f"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_8cd3b57fedc2bc5eccd61ee2409"`);
        await queryRunner.query(`ALTER TABLE "tickets" ADD CONSTRAINT "REL_d175b024857bfa9676f6a06368" UNIQUE ("sessionId")`);
        await queryRunner.query(`ALTER TABLE "tickets" ADD CONSTRAINT "FK_d175b024857bfa9676f6a06368f" FOREIGN KEY ("sessionId") REFERENCES "sessions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_8cd3b57fedc2bc5eccd61ee2409" FOREIGN KEY ("paymentInfoId") REFERENCES "paymentInfo"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
