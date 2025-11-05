This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

### Prerequisites

- Node.js 18+ 
- Docker (для локального PostgreSQL) - [установить Docker](https://www.docker.com/get-started)
- Или локальная установка PostgreSQL

### Setup

1. **Установите зависимости:**
```bash
npm install
```

2. **Запустите PostgreSQL (через Docker):**
```bash
npm run db:start
```

**Альтернатива:** Если Docker не установлен, используйте локальный PostgreSQL или Supabase cloud.

3. **Настройте переменные окружения:**
Создайте `.env.local` файл:
```env
DATABASE_URL="postgresql://coordinator:coordinator@localhost:5432/coordinator_dev?schema=public"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="generate-with: openssl rand -base64 32"
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
```

4. **Примените миграции базы данных:**
```bash
npm run db:migrate
```

5. **Запустите dev сервер:**
```bash
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000) в браузере.

### Полезные команды

```bash
npm run db:start      # Запустить PostgreSQL
npm run db:stop       # Остановить PostgreSQL
npm run db:studio     # Открыть Prisma Studio
npm run db:migrate    # Применить миграции
```

📖 Подробная документация: `documentation/POSTGRESQL_SETUP.md`

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
