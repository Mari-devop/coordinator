# Google OAuth Setup Guide

## 1. Create Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable the Google+ API

## 2. Create OAuth 2.0 Credentials

1. Go to "Credentials" in the left sidebar
2. Click "Create Credentials" → "OAuth 2.0 Client IDs"
3. Choose "Web application"
4. Add authorized redirect URIs:
   - `http://localhost:3000/api/auth/callback/google` (for development)
   - `https://yourdomain.com/api/auth/callback/google` (for production)

## 3. Create .env.local file

Create a `.env.local` file in your project root with:

```env
# Database
DATABASE_URL="file:./dev.db"

# NextAuth.js
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"

# Google OAuth
GOOGLE_CLIENT_ID="your-google-client-id-from-step-2"
GOOGLE_CLIENT_SECRET="your-google-client-secret-from-step-2"
```

## 4. Generate NextAuth Secret

Run this command to generate a secure secret:

```bash
openssl rand -base64 32
```

Replace `your-secret-key-here` with the generated secret.

## 5. Restart Development Server

After creating the `.env.local` file, restart your development server:

```bash
npm run dev
```

## 6. Test Google Sign-In

1. Go to `http://localhost:3000/login`
2. Click "Continue with Google"
3. You should be redirected to Google's OAuth consent screen
4. After authorization, you'll be redirected to `/onboarding`

## Troubleshooting

- Make sure the redirect URI in Google Console exactly matches: `http://localhost:3000/api/auth/callback/google`
- Check that all environment variables are correctly set
- Ensure the Google+ API is enabled in your Google Cloud project
- Check browser console for any error messages
