# Portfolio App - Setup Instructions

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```bash
# Telegram Bot Configuration
# Get these values from BotFather on Telegram
TELEGRAM_BOT_TOKEN=your_bot_token_here
TELEGRAM_CHAT_ID=your_chat_id_here

# API Configuration (if needed)
URL_BASE=https://christophergalea.com
URL_API=https://admin.christophergalea.com/api
URL_MEDIA=https://admin.christophergalea.com/uploads
KEY_API=your_api_key_here
KEY_API_POST=your_post_key_here

# Development
NODE_ENV=development
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Telegram Bot Setup

To set up the Telegram bot for contact form notifications:

1. **Create a Telegram Bot:**
   - Message [@BotFather](https://t.me/botfather) on Telegram
   - Send `/newbot` command
   - Follow the instructions to create your bot
   - Save the bot token you receive

2. **Get Your Chat ID:**
   - Message your bot on Telegram
   - Visit: `https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates`
   - Find your chat ID in the response (it's a number, might be negative for groups)

3. **Add to Environment Variables:**
   - Add `TELEGRAM_BOT_TOKEN` with your bot token
   - Add `TELEGRAM_CHAT_ID` with your chat ID

## Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

## Linting and Formatting

- Run linting: `npm run lint`
- Fix linting issues: `npm run lint:fix`
- Format code: `npm run format`
- Check formatting: `npm run format:check`
- Type checking: `npm run type-check`

## Docker

Build and run with Docker:

```bash
docker-compose up --build
```

## Improvements Made

- ✅ Fixed TypeScript type safety issues
- ✅ Removed console.error and added proper error handling
- ✅ Replaced EmailJS with Telegram Bot integration for contact form
- ✅ Replaced img tags with Next.js Image component
- ✅ Added React error boundaries
- ✅ Improved accessibility with ARIA labels
- ✅ Enhanced mobile navigation UX
- ✅ Added loading states for form submissions
- ✅ Optimized Dockerfile for better caching
- ✅ Configured ESLint and Prettier
- ✅ Standardized data imports across components
- ✅ Created API endpoint for Telegram notifications
