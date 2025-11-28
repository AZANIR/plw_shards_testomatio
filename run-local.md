# Як запустити локально

## Варіант 1: Через environment variables

```bash
# Windows PowerShell
$env:TESTOMATIO="ваш_api_ключ"
$env:TESTOMATIO_RUN="Local Test Run"
$env:TESTOMATIO_PROJECT_ID="ваш_project_id"  # якщо є
$env:BASE_URL="https://ваш_тестомат_url"  # якщо потрібно
npm test
```

```bash
# Windows CMD
set TESTOMATIO=ваш_api_ключ
set TESTOMATIO_RUN=Local Test Run
set TESTOMATIO_PROJECT_ID=ваш_project_id
set BASE_URL=https://ваш_тестомат_url
npm test
```

```bash
# Linux/Mac
export TESTOMATIO="ваш_api_ключ"
export TESTOMATIO_RUN="Local Test Run"
export TESTOMATIO_PROJECT_ID="ваш_project_id"
export BASE_URL="https://ваш_тестомат_url"
npm test
```

## Варіант 2: Через .env файл (рекомендовано)

Створіть файл `.env` в корені проекту:
```
TESTOMATIO=ваш_api_ключ
TESTOMATIO_RUN=Local Test Run
TESTOMATIO_PROJECT_ID=ваш_project_id
BASE_URL=https://ваш_тестомат_url
```

Потім запустіть:
```bash
npm test
```

## Запуск з sharding (симуляція CI):

```bash
# Shard 1/3
npx playwright test --shard=1/3

# Shard 2/3
npx playwright test --shard=2/3

# Shard 3/3
npx playwright test --shard=3/3
```

