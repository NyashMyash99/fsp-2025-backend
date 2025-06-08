import type { MigrationInterface, QueryRunner } from 'typeorm';

export class AddDefaultValueToAccessAtFieldInConversationEntity1749384639276
  implements MigrationInterface
{
  name = 'AddDefaultValueToAccessAtFieldInConversationEntity1749384639276';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "conversations" ALTER COLUMN "accessed_at" SET DEFAULT '"2025-06-08T12:10:41.110Z"'`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "conversations" ALTER COLUMN "accessed_at" DROP DEFAULT`,
    );
  }
}
