import type { MigrationInterface, QueryRunner } from 'typeorm';

export class AddConversationEntity1749372810000 implements MigrationInterface {
  name = 'AddConversationEntity1749372810000';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TYPE "public"."conversations_state_enum" AS ENUM('need_budget', 'need_interests', 'need_start_date', 'need_end_date', 'need_travel_means', 'need_transportation_means', 'finished')`,
    );
    await queryRunner.query(
      `CREATE TABLE "conversations" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "state" "public"."conversations_state_enum" array NOT NULL, "messages" jsonb array NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "accessed_at" TIMESTAMP NOT NULL, CONSTRAINT "PK_ee34f4f7ced4ec8681f26bf04ef" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "conversations"`);
    await queryRunner.query(`DROP TYPE "public"."conversations_state_enum"`);
  }
}
