import type { DataSourceOptions } from 'typeorm';
import { CONFIGURATION } from '../../config/configuration.js';
import { isDevelopmentMode } from '../../utils/helpers/development.helper.js';

export const OPTIONS: DataSourceOptions = {
  type: 'postgres',
  url: CONFIGURATION.DATABASE_URL,
  logging: isDevelopmentMode() ? ['query'] : ['error'],
  entities: [],
  migrations: [],
};
