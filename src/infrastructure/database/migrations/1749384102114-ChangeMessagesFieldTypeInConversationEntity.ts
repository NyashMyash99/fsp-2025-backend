import type { MigrationInterface, QueryRunner } from 'typeorm';

export class ChangeMessagesFieldTypeInConversationEntity1749384102114
  implements MigrationInterface
{
  name = 'ChangeMessagesFieldTypeInConversationEntity1749384102114';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "conversations" DROP COLUMN "messages"`,
    );
    await queryRunner.query(
      `ALTER TABLE "conversations" ADD "messages" jsonb NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "conversations" DROP COLUMN "messages"`,
    );
    await queryRunner.query(
      `ALTER TABLE "conversations" ADD "messages" jsonb array NOT NULL`,
    );
  }
}
