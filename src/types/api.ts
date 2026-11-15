/**
 * Shared API types. Feature-specific contracts are added in later phases
 * once backend contracts are approved.
 */

export type PaginatedResponse<T> = {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
};

export type HealthCheckResponse = {
  status: string;
  service?: string;
};
