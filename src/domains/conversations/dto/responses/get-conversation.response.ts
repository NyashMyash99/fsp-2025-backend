import type { ConversationModel } from '../../models/conversation.model.js';
import { GetMessageResponse } from './get-message.response.js';

export class GetConversationResponse {
  public readonly messages: GetMessageResponse[];

  public constructor({ messages }: ConversationModel) {
    this.messages = messages.map((message) => new GetMessageResponse(message));
  }
}
