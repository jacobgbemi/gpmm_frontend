/**
 * Runtime configuration derived from Expo public environment variables.
 * EXPO_PUBLIC_* values are embedded in the client bundle — never put secrets here.
 */
const DEFAULT_API_BASE = 'http://localhost:8000/api/v1';

export const config = {
  apiBaseUrl: (process.env.EXPO_PUBLIC_API_BASE_URL ?? DEFAULT_API_BASE).replace(
    /\/$/,
    ''
  ),
  appEnv: process.env.EXPO_PUBLIC_APP_ENV ?? 'development',
  isDev: (process.env.EXPO_PUBLIC_APP_ENV ?? 'development') !== 'production',
} as const;
