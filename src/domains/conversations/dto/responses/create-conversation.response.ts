import type { ConversationModel } from '../../models/conversation.model.js';

export class CreateConversationResponse {
  public readonly id: string;

  public constructor({ id }: ConversationModel) {
    this.id = id;
  }
}
