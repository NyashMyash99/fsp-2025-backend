import 'reflect-metadata';
import type { INestApplication } from '@nestjs/common';
import { Logger, ValidationPipe } from '@nestjs/common';
import { CONFIGURATION } from './config/configuration.js';

/**
 * @param appPromise - Приложение, которое необходимо настроить.<br/>
 *
 * @remarks Параметр необходим для настройки окружения при тестировании.
 */
export async function bootstrap(
  appPromise: Promise<INestApplication>,
): Promise<void> {
  const logger = new Logger('Main');

  try {
    // Подготавливаем модули и сервисы.
    const app = await appPromise;

    // Настраиваем CORS.
    app.enableCors({
      origin: CONFIGURATION.CORS_ALLOWED_CLIENT_URLS.split(','),
      credentials: true,
    });

    // Настраиваем валидацию.
    app.useGlobalPipes(
      new ValidationPipe({
        // Преобразовывает plain object в типизированный объект.
        transform: true,
        // Не засчитывает поля запроса, у которых нет декоратора проверки.
        whitelist: true,
      }),
    );

    // Запускаем приложение.
    const port: number = CONFIGURATION.API_PORT;
    await app.listen(port, '0.0.0.0');

    logger.log(`HTTP сервер запущен на порту ${port.toString()}.`);
  } catch (exception: unknown) {
    if (!(exception instanceof Error))
      return logger.error('Что-то пошло не так при запуске приложения.');

    logger.error(
      `Что-то пошло не так при запуске приложения: ${exception.message}.`,
      exception.stack,
    );
  }
}
