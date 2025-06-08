import { Injectable } from '@nestjs/common';
import { EntityNotFoundException } from '../../../app/exceptions/EntityNotFoundException.js';
import { ConversationsRepository } from '../repositories/conversations.repository.js';
import type { ConversationModel } from '../models/conversation.model.js';
import type { CreateConversationRequest } from '../dto/requests/create-conversation.request.js';
import { MessageType } from '../types/enums/message-type.enum.js';
import type { CreateMessageRequest } from '../dto/requests/create-message.request.js';

@Injectable()
export class ConversationsService {
  public constructor(
    private readonly conversationsRepository: ConversationsRepository,
  ) {}

  public async createConversation(
    dto: CreateConversationRequest,
  ): Promise<ConversationModel> {
    return await this.conversationsRepository.create({
      message: {
        type: MessageType.HUMAN,
        text: dto.message.text,
        payload: dto.message.payload ?? {},
      },
    });
  }

  public async createMessage(
    id: string,
    dto: CreateMessageRequest,
  ): Promise<ConversationModel> {
    const conversation = await this.conversationsRepository.get(id);
    if (!conversation) throw new EntityNotFoundException();

    // Говнокод, но времени уже нет.
    conversation.messages.push({
      type: MessageType.HUMAN,
      text: dto.text,
      payload: dto.payload ?? {},
    });

    conversation.messages.push({
      type: MessageType.BOT,
      text: dto.text,
      payload: {},
    });

    await this.conversationsRepository.update(id, {
      messages: conversation.messages,
    });

    return conversation;
  }

  /**
   * @param id
   * @throws EntityNotFoundException
   */
  public async getConversation(id: string): Promise<ConversationModel> {
    const conversation = await this.conversationsRepository.get(id);
    if (!conversation) throw new EntityNotFoundException();

    await this.conversationsRepository.update(conversation.id, {
      accessedAt: new Date(),
    });

    return conversation;
  }
}
