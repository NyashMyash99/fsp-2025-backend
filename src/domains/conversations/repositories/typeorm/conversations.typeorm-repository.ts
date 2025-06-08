import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ConversationsRepository } from '../conversations.repository.js';
import { ConversationEntity } from '../../entities/conversation.entity.js';
import type {
  CreateConversationType,
  UpdateConversationType,
} from '../../types/conversation.type.js';
import type { ConversationModel } from '../../models/conversation.model.js';

@Injectable()
export class ConversationsTypeormRepository implements ConversationsRepository {
  public constructor(
    @InjectRepository(ConversationEntity)
    private readonly repo: Repository<ConversationEntity>,
  ) {}

  public create(entity: CreateConversationType): Promise<ConversationModel> {
    const createdEntity = new ConversationEntity();
    createdEntity.messages = [entity.message];

    return this.repo.save(createdEntity);
  }

  public get(id: string): Promise<ConversationModel | null> {
    return this.repo.createQueryBuilder('conversations').where({ id }).getOne();
  }

  public async update(
    id: string,
    values: UpdateConversationType,
  ): Promise<void> {
    await this.repo.update(id, values);
  }
}
