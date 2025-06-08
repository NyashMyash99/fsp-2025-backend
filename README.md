## Подготовка к запуску

### 1. Указать переменные окружения
Все возможные значения располагаются в файле [`./src/config/configuration.ts`](./src/config/configuration.ts) 
с подробным описанием каждой переменной.

### 2. Запустить базу данных
```bash
docker compose -f ./infrastructure/docker-compose.yml --env-file=./.env up -d postgres
```

### 3. Применить миграции
```bash
npm install
npm run migration:run
```

## Запуск приложения

### 1. Посредствам Docker Compose
```bash
docker compose -f ./infrastructure/docker-compose.yml --env-file=./.env up -d backend
```

### 2. Посредствам Docker
```bash
docker build -f ./infrastructure/Dockerfile --build-arg CI_BUILD_IMAGE=node:22.16.0-alpine --build-arg CI_PROJECT_NAME=backend -t fsp.backend:latest .
docker run --name fsp.backend -p 3000:3000 --env-file=./.env --restart unless-stopped -d fsp.backend:latest
```

Где `CI_BUILD_IMAGE` и `CI_PROJECT_NAME` необязательные аргументы,
имеющие стандартные значения аналогичные представленным в команде.

### 3. Посредствам NodeJS
```bash
npm install
npm run build
npm run prod
```

## Разработка

### Настройка IDE

#### WebStorm

1. Настроить форматирование при сохранении.

Путь в настройках: `Tools` > `Actions on Save`.

```
☑ Optimize imports
☑ Run Prettier
```

2. Настроить Prettier.

Путь в настройках: `Languages & Frameworks` > `JavaScript` > `Prettier`.

```
⦿ Automatic Prettier configuration

☑ Run on save
```

3. Настроить ESLint.

Путь в настройках: `Languages & Frameworks` > `JavaScript` > `Code Quality Tools` > `ESLint`.

```
⦿ Manual ESLint configuration

ESLint package: выбираем из текущего node_modules.

Configuration File
    Configuration file: выбираем "infrastructure/.eslintrc.cjs".
```

### Написание кода

В проекте необходимо:

- Добавлять расширение (`.js`) при импортировании
  в связи с использованием последней версии языка.
- Добавлять `.js` при импортировании из `src`
  в связи с компиляцией через SWC, который использует `JavaScript`
  даже при разработке.