/**
 * Environment configuration.
 * Only EXPO_PUBLIC_* variables are available in the client bundle.
 * Never put secrets here.
 */

import Constants from 'expo-constants';

const extra = Constants.expoConfig?.extra ?? {};

export const ENV = {
  /** API base URL including /api/v1 (no trailing slash) */
  API_BASE_URL:
    process.env.EXPO_PUBLIC_API_BASE_URL ??
    (extra.apiBaseUrl as string | undefined) ??
    'http://localhost:8000/api/v1',

  /** development | staging | production */
  APP_ENV: (process.env.EXPO_PUBLIC_APP_ENV ?? 'development') as
    | 'development'
    | 'staging'
    | 'production',

  /** Enable verbose client logging */
  DEBUG: process.env.EXPO_PUBLIC_DEBUG === 'true',

  /** Convenience flags */
  isDev: (process.env.EXPO_PUBLIC_APP_ENV ?? 'development') === 'development',
  isProd: process.env.EXPO_PUBLIC_APP_ENV === 'production',
} as const;

export type AppEnv = typeof ENV.APP_ENV;
