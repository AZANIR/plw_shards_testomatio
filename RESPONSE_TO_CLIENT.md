# Відповідь клієнту

## Запитання:
> "Hello do you have a full working example of workflow with a testomatio reporter and SHARDED run of a playwright --shard=${{ matrix.shardIndex }}/${{ matrix.shardTotal }}"

## Відповідь:

**Так, є повний робочий приклад!** ✅

Я створив повний проект з GitHub Actions workflow, який включає:

### ✅ Що включено:

1. **GitHub Actions Workflow з Sharding**
   - Файл: `.github/workflows/playwright-sharded-testomat.yml`
   - Використовує `--shard=${{ matrix.shardIndex }}/${{ matrix.shardTotal }}`
   - Налаштована матриця з 3 shards (можна змінити)
   - Правильний синтаксис для GitHub Actions

2. **Testomat.io Reporter Integration**
   - Файл: `playwright.config.ts`
   - Використовує `@testomatio/reporter/playwright`
   - Environment variables: `TESTOMATIO`, `TESTOMATIO_RUN`, `TESTOMATIO_PROJECT_ID`
   - Автоматично об'єднує результати з усіх shards в один run

3. **Повний робочий приклад**
   - `package.json` з правильними залежностями
   - Приклади тестів для демонстрації
   - Повна документація

### 📋 Структура проекту:

```
├── .github/workflows/playwright-sharded-testomat.yml  # Workflow з sharding
├── playwright.config.ts                                # Конфігурація з Testomat.io
├── package.json                                        # Залежності
├── tests/                                              # Приклади тестів
└── README.md                                           # Інструкції
```

### 🚀 Як використати:

1. **Додайте секрети в GitHub:**
   - Перейдіть в Settings → Secrets and variables → Actions
   - Додайте `TESTOMATIO` з вашим API ключем Testomat.io
   - (Опціонально) Додайте `TESTOMATIO_PROJECT_ID`

2. **Push код:**
   ```bash
   git add .
   git commit -m "Add Playwright sharding with Testomat.io"
   git push
   ```

3. **Перевірте роботу:**
   - GitHub Actions автоматично запустить workflow
   - Створяться 3 паралельні джоби (shard 1/3, 2/3, 3/3)
   - Результати відправляться в Testomat.io
   - Всі shards об'єднаються в один run в Testomat.io

### 🔧 Ключові моменти:

**Workflow налаштування:**
```yaml
strategy:
  fail-fast: false
  matrix:
    shardIndex: [1, 2, 3]
    shardTotal: [3]

steps:
  - name: Run Playwright tests (sharded)
    run: |
      npx playwright test \
        --shard=${{ matrix.shardIndex }}/${{ matrix.shardTotal }}
```

**Playwright Config:**
```typescript
reporter: [
  ['list'],
  ['@testomatio/reporter/playwright', {
    apiKey: process.env.TESTOMATIO,
    run: process.env.TESTOMATIO_RUN,
  }],
]
```

### 📝 Важливі нотатки:

- **Sharding:** Playwright автоматично розподіляє тести між shards
- **Testomat.io:** Об'єднує результати з усіх shards в один run (якщо використовується той самий `TESTOMATIO_RUN`)
- **Кількість shards:** Можна змінити в workflow файлі (рядки 17-18)

### ✅ Перевірено:

- ✅ Правильний синтаксис `--shard=${{ matrix.shardIndex }}/${{ matrix.shardTotal }}`
- ✅ Testomat.io репортер правильно налаштований
- ✅ Environment variables коректно передаються
- ✅ Workflow готовий до використання

**Проект готовий до використання!** Можете адаптувати під вашу структуру тестів.

---

*Якщо потрібна допомога з налаштуванням або є питання - звертайтеся!*

