import { MigrationInterface, QueryRunner } from "typeorm";

export class AppointmentChange1683899948854 implements MigrationInterface {
    name = 'AppointmentChange1683899948854'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "appointments" ADD "notifiedDayBefore" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "appointments" ADD "notifiedHourBefore" boolean NOT NULL DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "appointments" DROP COLUMN "notifiedHourBefore"`);
        await queryRunner.query(`ALTER TABLE "appointments" DROP COLUMN "notifiedDayBefore"`);
    }

}
