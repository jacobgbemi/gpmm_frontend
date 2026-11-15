/**
 * Central Axios API client for GlintPM.
 * Phase 00 foundation: base URL, timeouts, JSON, auth header injection point,
 * and consistent error normalization. Feature endpoints are added in later phases.
 */
import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
} from 'axios';
import { config } from '@/constants/config';

export type ApiError = {
  message: string;
  status?: number;
  code?: string;
  details?: unknown;
};

let authToken: string | null = null;

/**
 * Set or clear the bearer token used for authenticated requests.
 * Token storage (SecureStore) is wired in the authentication phase.
 */
export function setAuthToken(token: string | null): void {
  authToken = token;
}

export function getAuthToken(): string | null {
  return authToken;
}

function createClient(): AxiosInstance {
  const instance = axios.create({
    baseURL: config.apiBaseUrl,
    timeout: 30000,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });

  instance.interceptors.request.use((req: InternalAxiosRequestConfig) => {
    if (authToken) {
      req.headers.Authorization = `Bearer ${authToken}`;
    }
    return req;
  });

  instance.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      return Promise.reject(normalizeError(error));
    }
  );

  return instance;
}

function normalizeError(error: AxiosError): ApiError {
  if (error.response) {
    const data = error.response.data as Record<string, unknown> | undefined;
    const message =
      (typeof data?.detail === 'string' && data.detail) ||
      (typeof data?.message === 'string' && data.message) ||
      error.message ||
      'Request failed';

    return {
      message,
      status: error.response.status,
      code: typeof data?.code === 'string' ? data.code : undefined,
      details: data,
    };
  }

  if (error.request) {
    return {
      message: 'Network error. Check your connection and try again.',
      code: 'NETWORK_ERROR',
    };
  }

  return {
    message: error.message || 'Unexpected error',
    code: 'UNKNOWN_ERROR',
  };
}

export const apiClient = createClient();

/** Typed helper for GET requests */
export async function apiGet<T>(
  url: string,
  requestConfig?: AxiosRequestConfig
): Promise<T> {
  const response = await apiClient.get<T>(url, requestConfig);
  return response.data;
}

/** Typed helper for POST requests */
export async function apiPost<T>(
  url: string,
  body?: unknown,
  requestConfig?: AxiosRequestConfig
): Promise<T> {
  const response = await apiClient.post<T>(url, body, requestConfig);
  return response.data;
}

/** Typed helper for PATCH requests */
export async function apiPatch<T>(
  url: string,
  body?: unknown,
  requestConfig?: AxiosRequestConfig
): Promise<T> {
  const response = await apiClient.patch<T>(url, body, requestConfig);
  return response.data;
}

/** Typed helper for DELETE requests */
export async function apiDelete<T>(
  url: string,
  requestConfig?: AxiosRequestConfig
): Promise<T> {
  const response = await apiClient.delete<T>(url, requestConfig);
  return response.data;
}
