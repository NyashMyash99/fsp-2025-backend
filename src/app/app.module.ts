import { Module } from '@nestjs/common';
import { DatabaseModule } from '../infrastructure/database/database.module.js';
import { ConversationsModule } from '../domains/conversations/conversations.module.js';

@Module({
  imports: [DatabaseModule, ConversationsModule],
})
export class AppModule {}
