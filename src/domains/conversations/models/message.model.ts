import type { MessageType } from '../types/enums/message-type.enum.js';

export type MessageModel = {
  type: MessageType;
  text: string;
  payload: Record<string, any>;
};
