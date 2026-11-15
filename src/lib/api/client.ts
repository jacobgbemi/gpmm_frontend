/**
 * Central Axios API client.
 * - Reads base URL from environment
 * - Supports auth header injection
 * - Normalises errors
 * - No feature-specific endpoints in Phase 01
 */

import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
} from 'axios';
import { ENV } from '@/constants/env';

export type ApiErrorBody = {
  detail?: string;
  message?: string;
  errors?: Record<string, string[]>;
  [key: string]: unknown;
};

export class ApiError extends Error {
  status: number;
  data: ApiErrorBody | null;
  isNetworkError: boolean;

  constructor(
    message: string,
    status: number,
    data: ApiErrorBody | null = null,
    isNetworkError = false
  ) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.data = data;
    this.isNetworkError = isNetworkError;
  }
}

/** Token getter – set by auth layer in later phases */
let authTokenGetter: (() => string | null | Promise<string | null>) | null = null;

export function setAuthTokenGetter(
  getter: (() => string | null | Promise<string | null>) | null
): void {
  authTokenGetter = getter;
}

const DEFAULT_TIMEOUT_MS = 30_000;

function createClient(): AxiosInstance {
  const client = axios.create({
    baseURL: ENV.API_BASE_URL,
    timeout: DEFAULT_TIMEOUT_MS,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });

  client.interceptors.request.use(
    async (config: InternalAxiosRequestConfig) => {
      if (authTokenGetter) {
        const token = await authTokenGetter();
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
      }
      if (ENV.DEBUG) {
        console.log(`[API] ${config.method?.toUpperCase()} ${config.baseURL}${config.url}`);
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  client.interceptors.response.use(
    (response) => response,
    (error: AxiosError<ApiErrorBody>) => {
      if (error.response) {
        const status = error.response.status;
        const data = error.response.data ?? null;
        const message =
          data?.detail ||
          data?.message ||
          (typeof data === 'string' ? data : null) ||
          error.message ||
          `Request failed with status ${status}`;
        throw new ApiError(String(message), status, data, false);
      }

      // Network / timeout / cancelled
      const isNetwork =
        error.code === 'ERR_NETWORK' ||
        error.message === 'Network Error' ||
        error.code === 'ECONNABORTED';
      throw new ApiError(
        isNetwork
          ? 'Unable to reach the server. Check your connection and try again.'
          : error.message || 'An unexpected error occurred',
        0,
        null,
        isNetwork
      );
    }
  );

  return client;
}

export const apiClient = createClient();

/** Typed helpers (no feature endpoints yet) */
export async function apiGet<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
  const response = await apiClient.get<T>(url, config);
  return response.data;
}

export async function apiPost<T>(
  url: string,
  data?: unknown,
  config?: AxiosRequestConfig
): Promise<T> {
  const response = await apiClient.post<T>(url, data, config);
  return response.data;
}

export async function apiPut<T>(
  url: string,
  data?: unknown,
  config?: AxiosRequestConfig
): Promise<T> {
  const response = await apiClient.put<T>(url, data, config);
  return response.data;
}

export async function apiPatch<T>(
  url: string,
  data?: unknown,
  config?: AxiosRequestConfig
): Promise<T> {
  const response = await apiClient.patch<T>(url, data, config);
  return response.data;
}

export async function apiDelete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
  const response = await apiClient.delete<T>(url, config);
  return response.data;
}
