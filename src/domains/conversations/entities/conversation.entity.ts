import type { ConversationModel } from '../models/conversation.model.js';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ConversationState } from '../types/enums/conversation-state.enum.js';
import type { MessageModel } from '../models/message.model.js';

@Entity('conversations')
export class ConversationEntity implements ConversationModel {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({
    type: 'enum',
    enum: ConversationState,
    array: true,
    default: [],
  })
  public state: ConversationState[];

  @Column({ type: 'jsonb' })
  public messages: MessageModel[];

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @Column({ name: 'accessed_at', default: new Date() })
  public accessedAt: Date;
}
