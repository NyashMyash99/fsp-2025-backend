import type { MessageType } from '../../types/enums/message-type.enum.js';
import type { MessageModel } from '../../models/message.model.js';

export class GetMessageResponse {
  public readonly type: MessageType;
  public readonly text: string;
  public readonly payload: Record<string, any>;

  public constructor({ type, text, payload }: MessageModel) {
    this.type = type;
    this.text = text;
    this.payload = payload;
  }
}
