import { config } from 'dotenv';
import { cleanEnv, port, str } from 'envalid';

config();

// Подгружаем данные из файла .env с их валидацией.
export const CONFIGURATION = cleanEnv(process.env, {
  API_PORT: port({
    desc: 'Порт для HTTP сервера',
    default: 3000,
  }),

  NODE_ENV: str({
    choices: ['development', 'production'],
    default: 'production',
  }),

  // Данные базы
  DATABASE_URL: str({
    desc: 'Подключение к базе данных',
    example: 'postgresql://local:password@localhost:5432/vibego',
    devDefault: 'postgresql://local:password@localhost:5432/vibego',
  }),

  // Frontend
  CORS_ALLOWED_CLIENT_URLS: str({
    desc: 'Домены, которым разрешён доступ к API',
    example: 'https://nyashmyash99.ru,https://nyashmyash99.dev',
    devDefault: '*',
    default: 'https://vibe-go.ru',
  }),

  // Docker
  // Обязательно к заполнению в .env при запуске базы через docker compose.
  DATABASE_USER: str({
    desc: 'Пользователь базы данных при запуске через docker compose',
    example: 'nyashmyash99',
    default: '',
  }),
  DATABASE_PASSWORD: str({
    desc: 'Пароль базы данных при запуске через docker compose',
    example: 'password',
    default: '',
  }),
  DATABASE_NAME: str({
    desc: 'Название базы данных при запуске через docker compose',
    example: 'vibego',
    default: '',
  }),

  DATABASE_VOLUME: str({
    desc: 'Место хранения данных из базы данных при запуске через docker compose',
    example: '/etc/docker/containers/databases/postgres',
    default: '',
  }),
});
