import { IsNotEmpty } from 'class-validator';
import { CreateMessageRequest } from './create-message.request.js';
import { Type } from 'class-transformer';

export class CreateConversationRequest {
  @IsNotEmpty()
  @Type(() => CreateMessageRequest)
  public readonly message: CreateMessageRequest;
}
