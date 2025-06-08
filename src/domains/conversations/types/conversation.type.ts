import type { MessageModel } from '../models/message.model.js';
import type { ConversationModel } from '../models/conversation.model.js';

export type CreateConversationType = {
  message: CreateMessageType;
};

export type UpdateConversationType = Partial<
  Pick<ConversationModel, 'accessedAt' | 'messages'>
>;

export type CreateMessageType = MessageModel;
