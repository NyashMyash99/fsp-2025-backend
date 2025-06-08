import { IsNotEmpty, IsObject, IsOptional, IsString } from 'class-validator';
import type { CreateMessageType } from '../../types/conversation.type.js';

export class CreateMessageRequest {
  @IsString()
  @IsNotEmpty()
  public readonly text: CreateMessageType['text'];

  @IsObject()
  @IsOptional()
  public readonly payload?: CreateMessageType['payload'];
}
