import type { ConversationState } from '../types/enums/conversation-state.enum.js';
import type { MessageModel } from './message.model.js';

export type ConversationModel = {
  id: string;

  state: ConversationState[];
  messages: MessageModel[];

  createdAt: Date;
  accessedAt: Date;
};
