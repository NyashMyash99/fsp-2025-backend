import type { ConversationModel } from '../models/conversation.model.js';
import type {
  CreateConversationType,
  UpdateConversationType,
} from '../types/conversation.type.js';

export abstract class ConversationsRepository {
  public abstract create(
    entity: CreateConversationType,
  ): Promise<ConversationModel>;

  public abstract get(id: string): Promise<ConversationModel | null>;

  public abstract update(
    id: string,
    values: UpdateConversationType,
  ): Promise<void>;
}
