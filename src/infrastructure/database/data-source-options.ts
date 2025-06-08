import type { DataSourceOptions } from 'typeorm';
import { CONFIGURATION } from '../../config/configuration.js';
import { isDevelopmentMode } from '../../utils/helpers/development.helper.js';

import { ConversationEntity } from '../../domains/conversations/entities/conversation.entity.js';

import { AddConversationEntity1749372810000 } from './migrations/1749372810000-AddConversationEntity.js';
import { ChangeMessagesFieldTypeInConversationEntity1749384102114 } from './migrations/1749384102114-ChangeMessagesFieldTypeInConversationEntity.js';
import { AddDefaultValueToStateFieldInConversationEntity1749384267741 } from './migrations/1749384267741-AddDefaultValueToStateFieldInConversationEntity.js';
import { AddDefaultValueToAccessAtFieldInConversationEntity1749384639276 } from './migrations/1749384639276-AddDefaultValueToAccessAtFieldInConversationEntity.js';

export const OPTIONS: DataSourceOptions = {
  type: 'postgres',
  url: CONFIGURATION.DATABASE_URL,
  logging: isDevelopmentMode() ? ['query'] : ['error'],
  entities: [ConversationEntity],
  migrations: [
    AddConversationEntity1749372810000,
    ChangeMessagesFieldTypeInConversationEntity1749384102114,
    AddDefaultValueToStateFieldInConversationEntity1749384267741,
    AddDefaultValueToAccessAtFieldInConversationEntity1749384639276,
  ],
};
