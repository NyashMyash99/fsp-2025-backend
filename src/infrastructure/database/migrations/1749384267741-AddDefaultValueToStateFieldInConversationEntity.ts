import type { MigrationInterface, QueryRunner } from 'typeorm';

export class AddDefaultValueToStateFieldInConversationEntity1749384267741
  implements MigrationInterface
{
  name = 'AddDefaultValueToStateFieldInConversationEntity1749384267741';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "conversations" ALTER COLUMN "state" SET DEFAULT '{}'`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "conversations" ALTER COLUMN "state" DROP DEFAULT`,
    );
  }
}
