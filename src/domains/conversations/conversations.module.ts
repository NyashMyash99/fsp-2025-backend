import { Module } from '@nestjs/common';
import { ConversationsController } from './controllers/conversations.controller.js';
import { ConversationsService } from './services/conversations.service.js';
import { ConversationsRepository } from './repositories/conversations.repository.js';
import { ConversationsTypeormRepository } from './repositories/typeorm/conversations.typeorm-repository.js';

@Module({
  controllers: [ConversationsController],
  providers: [
    ConversationsService,
    {
      provide: ConversationsRepository,
      useClass: ConversationsTypeormRepository,
    },
  ],
  exports: [ConversationsService],
})
export class ConversationsModule {}
